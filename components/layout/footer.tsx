import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import {
  FacebookIcon,
  LineIcon,
  YoutubeIcon,
} from "@/components/layout/social-icons";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICON_MAP = {
  facebook: FacebookIcon,
  line: LineIcon,
  youtube: YoutubeIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-arcade-green-800 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
        <Logo variant="inverted" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON_MAP[social.icon];
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-8 items-center justify-center rounded-full text-white/90 ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>

          <p className="text-xs whitespace-nowrap text-white/60">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
