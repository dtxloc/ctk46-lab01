import { NextRequest, NextResponse } from "next/server";

import {
  guestbookEntries,
  GuestbookEntry,
  validateGuestbookInput,
} from "@/data/guestbook";

function getSortedEntries(): GuestbookEntry[] {
  return [...guestbookEntries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

// GET /api/guestbook?limit=5
export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const sortedEntries = getSortedEntries();

  if (!limitParam) {
    return NextResponse.json(sortedEntries);
  }

  const limit = Number.parseInt(limitParam, 10);
  if (!Number.isInteger(limit) || limit <= 0) {
    return NextResponse.json(
      { error: "Query parameter 'limit' phai la so nguyen duong" },
      { status: 400 },
    );
  }

  return NextResponse.json(sortedEntries.slice(0, limit));
}

// POST /api/guestbook
export async function POST(request: NextRequest) {
  const body = (await request.json()) as { name?: unknown; message?: unknown };
  const validation = validateGuestbookInput(body);

  if (!validation.ok) {
    return NextResponse.json(
      { error: "Du lieu khong hop le", details: validation.errors },
      { status: 400 },
    );
  }

  const newEntry: GuestbookEntry = {
    id: Date.now().toString(),
    name: validation.name,
    message: validation.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
