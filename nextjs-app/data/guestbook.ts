export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface GuestbookInput {
  name?: unknown;
  message?: unknown;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Nguyen Van B",
    message: "Website dep qua! Chuc ban thanh cong nhe!",
    createdAt: new Date("2025-03-01").toISOString(),
  },
  {
    id: "2",
    name: "Tran Thi C",
    message: "Rat an tuong voi portfolio cua ban. Keep going!",
    createdAt: new Date("2025-03-05").toISOString(),
  },
  {
    id: "3",
    name: "Le Van D",
    message: "Minh cung dang hoc Next.js, mong duoc giao luu!",
    createdAt: new Date("2025-03-10").toISOString(),
  },
];

export function validateGuestbookInput(input: GuestbookInput):
  | {
      ok: true;
      name: string;
      message: string;
    }
  | {
      ok: false;
      errors: string[];
    } {
  const errors: string[] = [];

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 2 || name.length > 50) {
    errors.push("Ten phai tu 2 den 50 ky tu");
  }

  if (message.length < 1 || message.length > 500) {
    errors.push("Loi nhan phai tu 1 den 500 ky tu");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    name,
    message,
  };
}
