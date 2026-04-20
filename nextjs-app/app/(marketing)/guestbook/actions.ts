"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { guestbookEntries } from "@/data/guestbook";

const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface ActionState {
  success: boolean;
  errors?: {
    name?: string[];
    message?: string[];
  };
}

export async function createGuestbookEntry(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    name: (formData.get("name") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
  };

  const result = guestbookSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const normalizedName = result.data.name.trim().toLowerCase();
  const normalizedMessage = result.data.message.trim().toLowerCase();
  const oneMinuteAgo = Date.now() - 60_000;

  const duplicatedRecently = guestbookEntries.some((entry) => {
    const isSameContent =
      entry.name.trim().toLowerCase() === normalizedName &&
      entry.message.trim().toLowerCase() === normalizedMessage;
    const isWithinOneMinute =
      new Date(entry.createdAt).getTime() >= oneMinuteAgo;

    return isSameContent && isWithinOneMinute;
  });

  if (duplicatedRecently) {
    return {
      success: false,
      errors: {
        message: ["Không cho phép gửi lời nhắn trùng lặp trong vòng 1 phút"],
      },
    };
  }

  const newEntry = {
    id: Date.now().toString(),
    name: result.data.name.trim(),
    message: result.data.message.trim(),
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  revalidatePath("/guestbook");

  return { success: true };
}

export async function deleteGuestbookEntry(id: string): Promise<ActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return {
      success: false,
      errors: { message: ["Không tìm thấy lời nhắn"] },
    };
  }

  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");

  return { success: true };
}
