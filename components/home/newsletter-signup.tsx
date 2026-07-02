"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    // Frontend-only prototype: no backend to send this to yet.
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-border bg-arcade-green-50 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-1 text-xl font-bold text-foreground lg:text-4xl">訂閱電子報</h2>
        <p className="text-sm text-muted-foreground">
          獲得最新計畫進度與活動資訊
        </p>

        {submitted ? (
          <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-arcade-green-700">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            訂閱成功，感謝您的關注！
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <Input
              type="email"
              required
              placeholder="請輸入 Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              className="bg-background"
            />
            <Button type="submit" className="rounded-full sm:shrink-0">
              訂閱
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
