// app/components/PartnersAndClients.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import PartnerCard from './HallCards';
import { IoIosArrowForward } from "react-icons/io";
import gotasLaranja from "../../../../public/img/gotasLaranja.svg";
import gotasRoxa from "../../../../public/img/gotasRoxa.svg";


export default function Hall() {
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
    { logo: '/img/client5.svg', alt: 'Logo Cliente 5' },
    { logo: '/img/client6.svg', alt: 'Logo Cliente 6' },
    { logo: '/img/client7.svg', alt: 'Logo Cliente 7' },
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
    <section className="bg-gradient-linear-blue w-full py-20 px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        {/* NOSSOS CLIENTES - Seção do Carrossel */}
        <h2 className="text-xl md:text-2xl font-lemonMilkBold text-[#4F4F4F] mb-4 text-center">
          HALL DA FAMA
        </h2>
        <p className="text-base md:text-lg font-lemonMilkLight text-[#4F4F4F] mb-12 text-center max-w-6xl">
          Espaço para mostrarmos as conquistas profissionais de pessoas que fizeram parte da Dois no passado, e que hoje em dia estão voando muito alto por aí.
        </p>

        {/* Contêiner principal do carrossel */}
        <div className="relative w-full max-w-5xl"> 
            <button
                onClick={handleNext}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#87D2E8] p-2 rounded-full shadow-lg z-20 hover:scale-110 transition-transform duration-200 focus:outline-none"
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
        <div className="flex flex-row mt-10 justify-center items-center gap-6">
            <p className="text-[#3E3E3E] font-lemonMilkRegular">
                Também quer entrar nessa lista? 
            </p>
            
            <button className="bg-[#87D2E8] text-[#3E3E3E] py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300">
                <strong className="font-lemonMilkBold">
                Saiba como se tornar membro
                </strong>
          </button>
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