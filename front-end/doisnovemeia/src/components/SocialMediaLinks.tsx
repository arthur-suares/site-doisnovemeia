// app/components/SocialMediaLinks.tsx
// (Conteúdo permanece o mesmo que na última versão)
import React from 'react';
import { FaBehance, FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";

interface SocialMediaLinksProps {
  iconSize?: number;
  iconColorClass?: string;
  gapClass?: string;
  hoverEffectClass?: string;
  iconBackgroundClass?: string; // Para o fundo do ícone (ex: "bg-white rounded-full")
  iconPaddingClass?: string; // Para o padding do fundo (ex: "p-2")
}

export default function SocialMediaLinks({
  iconSize = 24,
  iconColorClass = 'text-white',
  gapClass = 'gap-6',
  hoverEffectClass = 'hover:scale-125 transition-transform',
  iconBackgroundClass = '',
  iconPaddingClass = ''
}: SocialMediaLinksProps) {

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/doisnovemeia-publicidade/?originalSubdomain=br', icon: FaLinkedinIn, label: "LinkedIn da Dois Nove Meia" },
    { href: 'https://www.facebook.com/Doisnovemeia?locale=pt_BR', icon: FaFacebook, label: "Facebook da Dois Nove Meia" },
    { href: 'https://www.instagram.com/doisnovemeia/', icon: FaInstagram, label: "Instagram da Dois Nove Meia" },
    { href: 'https://www.behance.net/doisnovemeia?locale=pt_BR', icon: FaBehance, label: "Behance da Dois Nove Meia" },
  ];

  return (
    <div className={`flex ${gapClass}`}>
      {socialLinks.map((linkItem, index) => (
        <a
          key={index}
          href={linkItem.href}
          className={`flex items-center justify-center ${iconBackgroundClass} ${iconPaddingClass} ${iconColorClass} ${hoverEffectClass}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkItem.label}
        >
          <linkItem.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}