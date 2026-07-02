import Image from "next/image";
import Link from "next/link";
import { MapPin, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate flex min-h-[420px] items-center overflow-hidden rounded-3xl px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
      <Image
        src="/images/hero-street.jpg"
        alt="台灣街道騎樓實景"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-arcade-green-950/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-2xl">
        <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
          騎樓共行．安全共好
        </h1>
        <p className="mt-3 text-xl font-medium text-white/90 sm:text-2xl">
          打造人本、永續、智慧的街道環境
        </p>
        <p className="mt-4 text-sm text-white/70 sm:text-base">
          全民參與．店家協力．政府支持，讓街道變得更好
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/report" />}
            nativeButton={false}
            size="lg"
            className="gap-2 rounded-full bg-white px-6 text-primary hover:bg-white/90"
          >
            <MapPin className="size-4" aria-hidden="true" />
            我要回報問題
          </Button>
          <Button
            render={<Link href="/project" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
          >
            <BarChart3 className="size-4" aria-hidden="true" />
            了解計畫進度
          </Button>
        </div>
      </div>

      <p className="absolute right-4 bottom-3 text-[10px] text-white/40">
        photo by Solomon203, CC BY-SA 4.0 (Wikimedia Commons)
      </p>
    </div>
  );
}
