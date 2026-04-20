import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
          <Avatar size="lg" className="ring-1 ring-border">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
          <div>
            <p>
              Xin chào! Tôi là <strong>Đặng Thị Xuân Lộc</strong>, sinh viên năm
              4 ngành Công nghệ Thông tin tại Đại học Đà Lạt.
            </p>
          </div>
        </div>

        <Accordion
          type="multiple"
          className="w-full rounded-xl border border-border bg-card px-4"
        >
          <AccordionItem value="skills">
            <AccordionTrigger>Kỹ năng</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>JavaScript / TypeScript</li>
                <li>React & Next.JS</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>SQL & PostgreSQL</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education">
            <AccordionTrigger>Học vấn</AccordionTrigger>
            <AccordionContent>
              <p className="font-medium">Đại học Đà Lạt</p>
              <p className="text-sm text-muted-foreground">
                Cử nhân Công nghệ Thông tin (2021 - 2025)
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="goal">
            <AccordionTrigger>Mục tiêu</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Tập trung xây dựng nền tảng Frontend vững chắc, phát triển sản
                phẩm web có trải nghiệm người dùng tốt và tiếp cận dần vai trò
                Full-stack Developer.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
