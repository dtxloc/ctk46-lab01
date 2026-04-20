import { NextRequest, NextResponse } from "next/server";

import {
  guestbookEntries,
  GuestbookEntry,
  validateGuestbookInput,
} from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// DELETE /api/guestbook/[id]
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Khong tim thay loi nhan" },
      { status: 404 },
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}

// PUT /api/guestbook/[id]
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Khong tim thay loi nhan" },
      { status: 404 },
    );
  }

  const body = (await request.json()) as { name?: unknown; message?: unknown };
  const validation = validateGuestbookInput(body);

  if (!validation.ok) {
    return NextResponse.json(
      { error: "Du lieu khong hop le", details: validation.errors },
      { status: 400 },
    );
  }

  const updated: GuestbookEntry = {
    ...guestbookEntries[index],
    name: validation.name,
    message: validation.message,
  };

  guestbookEntries[index] = updated;
  return NextResponse.json(updated);
}
