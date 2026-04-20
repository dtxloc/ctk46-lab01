"use client";

import { useState } from "react";

import { deleteGuestbookEntry } from "@/app/(marketing)/guestbook/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
      return;
    }

    setIsDeleting(true);
    await deleteGuestbookEntry(id);
    setIsDeleting(false);
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-xs text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDeleting ? "Đang xóa..." : "Xóa"}
    </button>
  );
}
