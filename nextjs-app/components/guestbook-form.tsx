"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  ActionState,
  createGuestbookEntry,
} from "@/app/(marketing)/guestbook/actions";
import SubmitButton from "@/components/submit-button";

const initialState: ActionState = {
  success: false,
};

export default function GuestbookForm() {
  const [state, formAction] = useActionState(
    createGuestbookEntry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
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
          name="name"
          type="text"
          placeholder="Nhập tên của bạn"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
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
          name="message"
          placeholder="Viết lời nhắn của bạn..."
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      <SubmitButton idleText="Gửi lời nhắn" pendingText="Đang gửi..." />

      {state.success && (
        <p className="text-green-600 dark:text-green-400 text-sm">
          Gửi lời nhắn thành công!
        </p>
      )}
    </form>
  );
}
