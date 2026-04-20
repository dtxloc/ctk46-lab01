"use client";

import { useActionState, useState } from "react";

import { ContactFormState, sendContactMessage } from "./actions";
import SubmitButton from "@/components/submit-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0);

  return (
    <ContactFormContent
      key={formKey}
      onSendAnother={() => setFormKey((prev) => prev + 1)}
    />
  );
}

function ContactFormContent({ onSendAnother }: { onSendAnother: () => void }) {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:2212405@dlu.edu.vn"
              className="text-emerald-700 hover:underline dark:text-emerald-300 text-sm"
            >
              2212405@dlu.edu.vn
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">GitHub</h3>
            <a
              href="https://github.com/dtxloc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline dark:text-emerald-300 text-sm"
            >
              github.com/dtxloc
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Địa chỉ</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          {state.success ? (
            <Alert className="p-6 text-center border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30">
              <AlertTitle className="text-green-700 dark:text-green-400 text-lg mb-2">
                Gửi thành công!
              </AlertTitle>
              <AlertDescription className="text-green-600 dark:text-green-300">
                Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
              </AlertDescription>
              <Button
                type="button"
                onClick={onSendAnother}
                variant="outline"
                className="mt-4 border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              >
                Gửi tin nhắn khác
              </Button>
            </Alert>
          ) : (
            <form action={formAction} className="space-y-4">
              <Alert>
                <AlertTitle>Thông tin phản hồi</AlertTitle>
                <AlertDescription>
                  Vui lòng điền đầy đủ thông tin để tôi có thể phản hồi nhanh
                  nhất.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                />
                {state.errors?.name && (
                  <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Chủ đề bạn muốn trao đổi"
                  required
                />
                {state.errors?.subject && (
                  <p className="text-red-500 text-sm">
                    {state.errors.subject[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Viết nội dung tin nhắn..."
                  required
                  rows={5}
                  className="resize-none"
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <SubmitButton
                idleText="Gửi tin nhắn"
                pendingText="Đang gửi..."
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
