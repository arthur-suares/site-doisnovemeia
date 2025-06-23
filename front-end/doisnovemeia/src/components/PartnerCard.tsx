// app/components/PartnerCard.tsx
import Image from 'next/image';

interface PartnerCardProps {
  logoSrc: string;
  altText: string;
}

export default function PartnerCard({ logoSrc, altText }: PartnerCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-zinc-950/10 rounded-2xl shadow-lg h-[197px] w-[211px] flex-shrink-0">
      <Image
        src={logoSrc}
        alt={altText}
        width={120}
        height={60}
        className="object-contain"
      />
    </div>
  );
}