// app/components/HallCard.tsx
import Image from 'next/image';

interface HallCardProps {
  logoSrc: string;
  altText: string;
}

export default function HallCard({ logoSrc, altText }: HallCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#D9D9D9] rounded-2xl shadow-lg h-[150px] w-[211px] flex-shrink-0">
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