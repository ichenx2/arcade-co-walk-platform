import type { SVGProps } from "react";

/**
 * lucide-react intentionally excludes brand marks, so these three
 * social icons (matching the footer in the design) are hand-drawn
 * minimal glyphs rather than a brand-icon dependency.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.86.24-1.45 1.47-1.45H17V4.35C16.73 4.32 15.8 4.24 14.72 4.24c-2.25 0-3.79 1.37-3.79 3.89V10.5H8.5v3H11V20h3v-6.5Z" />
    </svg>
  );
}

export function LineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 4c-4.97 0-9 3.26-9 7.29 0 3.61 3.2 6.64 7.52 7.2.29.06.69.2.79.45.09.23.06.58.03.81l-.13.79c-.04.23-.18.9.79.49.97-.41 5.24-3.09 7.15-5.29C20.4 14.02 21 12.72 21 11.29 21 7.26 16.97 4 12 4Zm-4.5 9.4h-1.4a.32.32 0 0 1-.32-.32V9.2c0-.18.14-.32.32-.32h1.4c.18 0 .32.14.32.32v3.88c0 .18-.14.32-.32.32Zm5.1 0h-1.4a.32.32 0 0 1-.32-.32V9.2c0-.18.14-.32.32-.32h1.4c.18 0 .32.14.32.32v3.88c0 .18-.14.32-.32.32Zm.02 0-.02.32h2.8c.18 0 .32-.14.32-.32V12.1c0-.18-.14-.32-.32-.32h-1.98V9.2c0-.18-.14-.32-.32-.32h-.02c-.18 0-.32.14-.32.32v3.88c0 .18.14.32.32.32Zm-8.12-2.3 1.68 2.24c.06.08.14.06.14-.04V9.2c0-.18-.14-.32-.32-.32H5.6c-.18 0-.32.14-.32.32v3.88c0 .1.08.12.14.04Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 5.8 12 5.8 12 5.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 8.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-3.8ZM10 14.7V9.3l5 2.7-5 2.7Z" />
    </svg>
  );
}
