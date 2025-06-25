// app/components/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

import icondoisWhite from "../../public/img/logo-white.svg";

export default function Footer() {
  const mapSiteLinks = [
    { label: "OLÁ", href: "/" },
    { label: "A GENTE", href: "/a-gente" },
    { label: "PROJETOS", href: "/projetos" },
    { label: "SOLUÇÕES", href: "/solucoes" },
    { label: "BORA CONVERSAR", href: "/bora-conversar" },
    { label: "BLOG", href: "/blog" },
    { label: "TRABALHE COM A GENTE", href: "/trabalhe-com-a-gente" },
  ];

  return (
    <footer className="bg-purple-brandPurle w-full py-16 px-8 text-white relative">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        {/* Coluna 1: Logo Grande */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/5 mb-8 lg:mb-0">
          <Image
            src={icondoisWhite}
            alt="Logo Dois Nove Meia Branca"
            width={250}
            height={250}
            className="h-auto w-auto"
          />
        </div>

        {/* Coluna 2: INFORMAÇÕES */}
        <div className="text-center lg:text-left lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="font-lemonMilkBold text-lg mb-4">INFORMAÇÕES</h3>
          <p className="font-lemonMilkLight text-sm mb-2 leading-relaxed">
            UNIVERSIDADE DE BRASÍLIA, ICC NORTE, BLOCO A SALA AT-026, PORTA VERDE, SHCN, BRASÍLIA - DF, 70910-900
          </p>
          <p className="font-lemonMilkLight text-sm mt-3">
            SEGUNDA A SEXTA
          </p>
          <p className="font-lemonMilkLight text-sm mt-5">
            14H ÀS 18H
          </p>
        </div>

        {/* Coluna 3: MAPA DO SITE */}
        <div className="text-center lg:text-left lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="font-lemonMilkBold text-lg mb-4">MAPA DO SITE</h3>
          <nav className="flex flex-col gap-2">
            {mapSiteLinks.map((item) => (
              <Link key={item.label} href={item.href} className="font-lemonMilkLight text-sm hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Coluna 4: FALE CONOSCO */}
        <div className="text-center lg:text-left lg:w-1/5 mb-8 lg:mb-0">
          <h3 className="font-lemonMilkBold text-lg mb-4">FALE CONOSCO</h3>
          <p className="font-lemonMilkLight text-sm mb-2">
            (XX) XXXXX-XXXX
          </p>
          <p className="font-lemonMilkLight text-sm mb-6">
            XXXXXXXXXX@DOISNOVEMEIA.COM.BR
          </p>
          
          {/* AQUI: O container das redes sociais. Na imagem do Footer, os ícones têm um fundo branco/20 e são arredondados */}
          {/* Na imagem do footer, os ícones são roxos. */}
          <div className="flex justify-center bg-white/20 py-4 rounded-full"> {/* Adicionei justify-start para alinhar à esquerda em desktop */}
            <SocialMediaLinks
                iconSize={30} // Corresponde ao "text-2xl" original
                iconColorClass="text-white"
                gapClass="gap-4" // Mantém o espaçamento original
                hoverEffectClass="hover:scale-125 transition-transform"
              />
          </div>
        </div>

        {/* Coluna 5: Botão BORA CONVERSAR? */}
        <div className="flex justify-center items-center lg:w-1/5">
          <Link href="/bora-conversar" passHref>
            <button className="flex flex-col items-center justify-center bg-green-brandGreen text-purple-brandPurle font-lemonMilkBold text-xl rounded-full w-48 h-48 shadow-xl hover:scale-105 transition-transform duration-300">
              <strong>
                BORA
              </strong>
              <strong>
                CONVERSAR?
              </strong>
              
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}