import "./globals.css";

export const metadata = {
  title: "CTK46 - Lab 01",
  description: "Bài thực hành Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
