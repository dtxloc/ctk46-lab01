"use client";

import { FormEvent, useMemo, useState } from "react";
import useSWR from "swr";

import { GuestbookEntry } from "@/data/guestbook";

const PAGE_SIZE = 5;

const fetcher = async (url: string): Promise<GuestbookEntry[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Không thể tải sổ lưu bút");
  }

  return res.json();
};

export default function GuestbookPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: entries = [],
    error,
    isLoading,
    mutate,
  } = useSWR<GuestbookEntry[]>("/api/guestbook", fetcher);

  const totalPages = Math.max(1, Math.ceil(entries.length / PAGE_SIZE));

  const paginatedEntries = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return entries.slice(start, start + PAGE_SIZE);
  }, [currentPage, entries]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      if (!res.ok) {
        const payload = (await res.json()) as { details?: string[] };
        throw new Error(
          payload.details?.join(". ") || "Không thể gửi lời nhắn",
        );
      }

      setName("");
      setMessage("");
      setCurrentPage(1);
      await mutate();
    } catch (err) {
      const messageText =
        err instanceof Error ? err.message : "Không thể gửi lời nhắn";
      setSubmitError(messageText);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
      return;
    }

    setDeletingIds((prev) => new Set(prev).add(id));

    try {
      const res = await fetch(`/api/guestbook/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Không thể xóa lời nhắn");
      }

      await mutate();
      setCurrentPage((prev) => {
        const nextCount = entries.length - 1;
        const nextTotalPages = Math.max(1, Math.ceil(nextCount / PAGE_SIZE));
        return Math.min(prev, nextTotalPages);
      });
    } catch {
      window.alert("Không thể xóa lời nhắn. Vui lòng thử lại.");
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Hãy để lại lời nhắn cho tôi nhé!
      </p>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50 p-6 mb-8 space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Tên của bạn
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Lời nhắn
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Viết lời nhắn của bạn..."
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>

        {submitError && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !name.trim() || !message.trim()}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Đang gửi..." : "Gửi lời nhắn"}
        </button>
      </form>

      {isLoading && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Đang tải sổ lưu bút...
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-500">
          Không thể tải sổ lưu bút. Vui lòng thử lại.
        </div>
      )}

      {!isLoading && !error && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {entries.length} lời nhắn
          </p>

          {paginatedEntries.map((entry) => {
            const isDeleting = deletingIds.has(entry.id);

            return (
              <div
                key={entry.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {entry.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                    </span>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      disabled={isDeleting}
                      className="text-xs text-red-500 hover:text-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isDeleting ? "Đang xóa..." : "Xóa"}
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {entry.message}
                </p>
              </div>
            );
          })}

          {entries.length === 0 && (
            <p className="text-center text-gray-400 py-8">
              Chưa có lời nhắn nào. Hãy là người đầu tiên!
            </p>
          )}

          {entries.length > PAGE_SIZE && (
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trang trước
              </button>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                Trang {currentPage}/{totalPages}
              </span>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trang sau
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
