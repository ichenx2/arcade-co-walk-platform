import Image from "next/image";

export function CasePhotos({ photos, title }: { photos: string[]; title: string }) {
  if (photos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {photos.map((photo, index) => (
        <div
          key={photo + index}
          className="relative aspect-video overflow-hidden rounded-2xl border border-border"
        >
          <Image
            src={photo}
            alt={`${title} — 現況照片 ${index + 1}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
