import DeleteButton from "@/components/delete-button";
import GuestbookForm from "@/components/guestbook-form";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { guestbookEntries } from "@/data/guestbook";

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase() || "?";
}

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Hãy để lại lời nhắn cho tôi nhé!
      </p>

      <GuestbookForm />

      <div className="space-y-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {entries.length} lời nhắn
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Danh sách lời nhắn</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {entries.map((entry, index) => (
              <div key={entry.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{getInitial(entry.name)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {entry.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                    </span>
                    <DeleteButton id={entry.id} />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {entry.message}
                </p>
                {index < entries.length - 1 && <Separator className="mt-3" />}
              </div>
            ))}

            {entries.length === 0 && (
              <p className="text-center text-gray-400 py-8">
                Chưa có lời nhắn nào. Hãy là người đầu tiên!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
