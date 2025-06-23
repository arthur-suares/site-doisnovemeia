// app/components/PartnersAndClients.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import PartnerCard from './PartnerCard'; // Importe o componente PartnerCard
import { IoIosArrowForward } from "react-icons/io"; // Ícone de seta para avançar
import gotasLaranja from "../../public/img/gotasLaranja.svg";
import gotasRoxa from "../../public/img/gotasRoxa.svg";


export default function PartnersAndClients() {
  // Dados dos parceiros (seção fixa)
  const partners = [
    { logo: '/img/look-feel.svg', alt: 'Logo Look & Feel' },
    { logo: '/img/grupo-gestao.svg', alt: 'Logo Grupo Gestão' },
    { logo: '/img/concentro.svg', alt: 'Logo Concentro' },
    { logo: '/img/engnet.svg', alt: 'Logo EngNet' },
  ];

  // Dados dos clientes (para o carrossel)
  const originalClients = [
    { logo: '/img/wwf.svg', alt: 'Logo WWF' },
    { logo: '/img/olho-globo.svg', alt: 'Logo TV Globo' },
    { logo: '/img/sigma.svg', alt: 'Logo Sigma' },
    { logo: '/img/you.svg', alt: 'Logo YOU' },
    { logo: '/img/client5.svg', alt: 'Logo Cliente 5' },
    { logo: '/img/client6.svg', alt: 'Logo Cliente 6' },
    { logo: '/img/client7.svg', alt: 'Logo Cliente 7' },
  ];

  // Para criar o efeito de loop suave, duplicamos os primeiros X itens no final.
  // X deve ser pelo menos o número de itens visíveis + (scrollStep - 1)
  // Neste caso, 4 (visíveis) + 0 (scrollStep-1) = 4, então duplicar os 4 primeiros é um bom buffer.
  const clients = [...originalClients, ...originalClients.slice(0, 4)];

  const [currentIndex, setCurrentIndex] = useState(0); // Índice do primeiro item visível no carrossel
  const carouselTrackRef = useRef<HTMLDivElement>(null); // Referência para o div que contém todos os cards e se move

  const cardWidth = 211; // Largura FIXA de cada PartnerCard em pixels (do PartnerCard.tsx)
  const gap = 24;        // Espaçamento FIXO entre os cards (equivalente a Tailwind's gap-6 ou space-x-6, que é 24px)
  const itemFullWidth = cardWidth + gap; // Largura total de um item, incluindo seu gap para o próximo

  const visibleItemsCount = 4; // Quantidade de itens que devem aparecer perfeitamente na tela
  const scrollStep = 1;        // Quantos itens avançar por clique (1 por vez)


  // Handler para o botão de seta "Avançar"
  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex + scrollStep);
  }, [scrollStep]);

  // Efeito que move o carrossel quando currentIndex muda
  useEffect(() => {
    if (carouselTrackRef.current) {
      const track = carouselTrackRef.current;

      // Lógica do loop suave: Quando o carrossel avança para os itens duplicados no final da lista 'clients'
      if (currentIndex >= originalClients.length) {
        // Desativa temporariamente a transição CSS para fazer um "salto" instantâneo
        track.style.transition = 'none';

        // Calcula a posição de "reset": para onde saltar de volta no início dos itens originais.
        // É a posição do item correspondente no bloco original.
        const resetIndex = currentIndex - originalClients.length;
        track.style.transform = `translateX(-${resetIndex * itemFullWidth}px)`;

        // Força o navegador a aplicar 'transition: none' antes de reativar
        void track.offsetWidth; // Isso força um reflow

        // Reativa a transição CSS para as próximas animações suaves
        track.style.transition = 'transform 0.5s ease-in-out';
        
        // Atualiza o currentIndex para o ponto de reset + o próximo scrollStep,
        // para que a próxima animação ocorra a partir do lugar certo.
        setCurrentIndex(resetIndex + scrollStep);
      } else {
        // Para movimentos normais (não loop), aplica a translação com a transição suave
        track.style.transform = `translateX(-${currentIndex * itemFullWidth}px)`;
      }
    }
  }, [currentIndex, originalClients.length, scrollStep, itemFullWidth]);


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
        {/* Usando gap-6 para manter o mesmo espaçamento desejado */}
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

        {/* Contêiner principal do carrossel - Este é o invólucro para posicionar o carrossel e seus botões */}
        {/* max-w-5xl (1024px) é maior que 916px, então não corta a janela. */}
        <div className="relative w-full max-w-5xl"> 
            {/* Botão de seta para a direita - Posicionado absolutamente em relação ao seu pai 'relative' (max-w-5xl) */}
            <button
                onClick={handleNext}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-lg z-20 hover:scale-110 transition-transform duration-200 focus:outline-none"
                aria-label="Avançar"
            >
                <IoIosArrowForward size={30} className="text-[#4F4F4F]" />
            </button>

            {/* Este div define a "janela" visível do carrossel.
                Sua largura é EXATAMENTE o que é necessário para 4 cards + 3 gaps.
                O 'overflow-hidden' nele garante que os cards que saem dessa largura sejam cortados.
                'mx-auto' centraliza essa janela.
            */}
            <div className="w-[916px] mx-auto overflow-hidden">
                {/* A "Track" do carrossel - Este div é flexível e se move horizontalmente.
                    'space-x-6' define o gap de 24px entre os cards.
                */}
                <div
                    ref={carouselTrackRef}
                    className="flex transition-transform duration-500 ease-in-out space-x-6"
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0" // Essencial para que os cards de largura fixa não encolham
                            // A largura do card é definida no PartnerCard.tsx, não precisa de estilo aqui.
                        >
                            <PartnerCard logoSrc={client.logo} altText={client.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}