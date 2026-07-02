"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionTitle, SectionDescription } from "@/components/shared/typography";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("請填寫所有欄位");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("請輸入有效的電子郵件地址");
      return;
    }

    setError(null);
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
    setSubmitted(false);
  }

  return (
    <div>
      <SectionTitle>聯絡我們</SectionTitle>
      <SectionDescription>
        對計畫有任何想法、合作提議或問題回饋，歡迎透過以下表單與我們聯繫。
      </SectionDescription>

      <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-arcade-green-50 text-primary">
              <CheckCircle2 className="size-6" aria-hidden="true" />
            </span>
            <p className="text-base font-bold text-foreground">感謝您的訊息！</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              我們已收到您的留言，將會盡快回覆您。
            </p>
            <Button type="button" variant="outline" onClick={handleReset} className="mt-2">
              重新填寫
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="contact-name">姓名</Label>
              <Input
                id="contact-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="請輸入您的姓名"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="contact-email">電子郵件</Label>
              <Input
                id="contact-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@mail.com"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="contact-message">訊息內容</Label>
              <Textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="請輸入您想與我們分享的想法或問題"
                rows={5}
                className="mt-1.5"
              />
            </div>

            {error ? (
              <p className="text-sm font-medium text-destructive">{error}</p>
            ) : null}

            <Button type="submit" className="mt-1 gap-1.5">
              <Mail className="size-4" aria-hidden="true" />
              送出訊息
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
