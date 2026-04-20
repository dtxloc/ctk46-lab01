"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  idleText: ReactNode;
  pendingText: ReactNode;
  className?: string;
}

export default function SubmitButton({
  idleText,
  pendingText,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={
        className ||
        "bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      }
    >
      {pending ? pendingText : idleText}
    </button>
  );
}
