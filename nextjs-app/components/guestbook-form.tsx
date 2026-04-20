"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  ActionState,
  createGuestbookEntry,
} from "@/app/(marketing)/guestbook/actions";
import SubmitButton from "@/components/submit-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Để lại lời nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên của bạn</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Nhập tên của bạn"
              required
            />
            {state.errors?.name && (
              <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Viết lời nhắn của bạn..."
              required
              rows={3}
              className="resize-none"
            />
            {state.errors?.message && (
              <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
            )}
          </div>

          <SubmitButton idleText="Gửi lời nhắn" pendingText="Đang gửi..." />

          {state.success && (
            <p className="text-green-600 dark:text-green-400 text-sm">
              Gửi lời nhắn thành công!
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
