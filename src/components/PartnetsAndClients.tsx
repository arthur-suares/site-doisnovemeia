// app/components/PartnersAndClients.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import PartnerCard from './PartnerCard';
import { IoIosArrowForward } from "react-icons/io";
import gotasLaranja from "../../public/img/gotasLaranja.svg";
import gotasRoxa from "../../public/img/gotasRoxa.svg";


export default function PartnersAndClients() {
  const partners = [
    { logo: '/img/look&feel.svg', alt: 'Logo Look & Feel' },
    { logo: '/img/grupo-gestao.svg', alt: 'Logo Grupo Gestão' },
    { logo: '/img/concentro.svg', alt: 'Logo Concentro' },
    { logo: '/img/engnet.svg', alt: 'Logo EngNet' },
  ];

  const originalClients = [
    { logo: '/img/wwf.svg', alt: 'Logo WWF' },
    { logo: '/img/globo.svg', alt: 'Logo TV Globo' },
    { logo: '/img/sigma.svg', alt: 'Logo Sigma' },
    { logo: '/img/you.svg', alt: 'Logo YOU' },
    { logo: '/img/look&feel.svg', alt: 'Logo Look & Feel' },
    { logo: '/img/grupo-gestao.svg', alt: 'Logo Grupo Gestão' },
    { logo: '/img/concentro.svg', alt: 'Logo Concentro' },
    { logo: '/img/engnet.svg', alt: 'Logo EngNet' },
  ];

  const visibleItemsCount = 4;
  const scrollStep = 1;
  const cardWidth = 211;
  const gap = 24;
  const itemFullWidth = cardWidth + gap;

  const clients = [...originalClients, ...originalClients.slice(0, visibleItemsCount)];


  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Removendo isTransitioning, vamos confiar no requestAnimationFrame
  // const isTransitioning = useRef(false);

  const handleNext = useCallback(() => {
    // A condição para o reset deve ser verificada ANTES de avançar o currentIndex
    // para que a lógica de "reset e próximo passo" funcione no mesmo frame ou no próximo.

    const track = carouselTrackRef.current;
    if (!track) return;

    if (currentIndex >= originalClients.length) {
      // ESTAMOS NO BLOCCO DE DUPLICATAS. VAMOS RESETAR E DEPOIS AVANÇAR.
      const resetToOriginalIndex = currentIndex - originalClients.length; // Calcula onde estamos nas duplicatas

      track.style.transition = 'none'; // Desativa transição
      track.style.transform = `translateX(-${resetToOriginalIndex * itemFullWidth}px)`; // Pula para a posição correspondente no início

      // Força reflow para aplicar a transição none e o transform imediatamente
      void track.offsetWidth; 

      // Agenda a reativação da transição e o AVANÇO do currentIndex para o PRÓXIMO FRAME.
      requestAnimationFrame(() => {
        track.style.transition = 'transform 0.5s ease-in-out'; // Reativa transição
        setCurrentIndex(resetToOriginalIndex + scrollStep); // Avança para o próximo item real
      });

    } else {
      // ESTAMOS NO BLOCO ORIGINAL OU NÃO PRECISAMOS DE RESET. APENAS AVANÇA.
      setCurrentIndex(prevIndex => prevIndex + scrollStep);
    }
  }, [currentIndex, originalClients.length, scrollStep, itemFullWidth]);


  // O useEffect agora apenas aplica a transformação baseado no currentIndex.
  // A lógica de reset e reativação da transição é gerenciada pelo handleNext.
  useEffect(() => {
    if (carouselTrackRef.current) {
      const track = carouselTrackRef.current;
      track.style.transform = `translateX(-${currentIndex * itemFullWidth}px)`;
    }
  }, [currentIndex, itemFullWidth]);


  return (
    <section className="bg-gradient-linear-green w-full py-20 px-8 relative overflow-hidden">
      {/* Gotas Laranja (decorativas) - Posicionamento absoluto no fundo */}
      <div className="absolute top-[5%] right-[5%] lg:top-[10%] lg:right-[10%] z-0">
        <Image src={gotasLaranja} alt="" width={100} height={100} className="opacity-70 animate-float-slow" />
      </div>
      {/* Gotas Roxa (decorativas) - Posicionamento absoluto no fundo */}
      <div className="absolute bottom-[5%] left-[5%] lg:bottom-[10%] lg:left-[10%] z-0">
        <Image src={gotasRoxa} alt="" width={120} height={120} className="opacity-70 animate-float-slow delay-500" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        {/* NOSSOS PARCEIROS - Seção fixa com layout de grid */}
        <h2 className="text-xl md:text-2xl font-lemonMilkBold text-[#4F4F4F] mb-4 text-center">
          NOSSOS PARCEIROS
        </h2>
        <p className="text-base md:text-lg font-lemonMilkLight text-[#4F4F4F] mb-12 text-center max-w-2xl">
          CONTAMOS NOSSAS PARCERIAS NOS DEDOS DE UMA MÃO, MAS O SUCESSO DELAS VOCÊ VAI MEDIR EM DUAS.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-20 w-full max-w-4xl">
          {partners.map((partner, index) => (
            <PartnerCard key={index} logoSrc={partner.logo} altText={partner.alt} />
          ))}
        </div>

        {/* NOSSOS CLIENTES - Seção do Carrossel */}
        <h2 className="text-xl md:text-2xl font-lemonMilkBold text-[#4F4F4F] mb-4 text-center">
          NOSSOS CLIENTES
        </h2>
        <p className="text-base md:text-lg font-lemonMilkLight text-[#4F4F4F] mb-12 text-center max-w-2xl">
          PARCEIROS QUE JÁ CONFIARAM NA GENTE
        </p>

        {/* Contêiner principal do carrossel */}
        <div className="relative w-full max-w-5xl"> 
            <button
                onClick={handleNext}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-lg z-20 hover:scale-110 transition-transform duration-200 focus:outline-none"
                aria-label="Avançar"
            >
                <IoIosArrowForward size={30} className="text-[#4F4F4F]" />
            </button>

            <div className="w-[916px] mx-auto overflow-hidden">
                <div
                    ref={carouselTrackRef}
                    className="flex transition-transform duration-500 ease-in-out space-x-6"
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                        >
                            <PartnerCard logoSrc={client.logo} altText={client.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Indicadores de página (dots) 
        <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: originalClients.length }).map((_, pageIdx) => {
                const activeDotIndex = currentIndex % originalClients.length;
                const isActiveDot = pageIdx === activeDotIndex;

                return (
                    <span
                        key={pageIdx}
                        className={`block w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                            isActiveDot ? 'bg-[#4F4F4F]' : 'bg-gray-400'
                        }`}
                        onClick={() => setCurrentIndex(pageIdx)}
                    ></span>
                );
            })}
        </div> */}
      </div>
    </section>
  );
}