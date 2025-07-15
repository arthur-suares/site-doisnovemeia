// app/a-gente/components/OurVictorys.tsx
'use client';

import React from 'react';
import Image from 'next/image';


export default function OurVictorys() {

  return (
    <section className="relative w-full bg-gradient-linear-green py-[100px] px-8 overflow-hidden">
      {/* Trovões Brancos (posicionamento absoluto) */}
      {/* ... (código dos trovões - sem alterações) ... */}

      {/* Contêiner para ALINHAR TUDO À ESQUERDA e ter a largura máxima */}
      {/* mx-auto não será usado aqui, pois queremos alinhamento à esquerda */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start relative z-10"> {/* Adicionado items-start */}

        {/* Box Laranja Superior: Nossas Conquistas */}
        {/* AQUI ESTÁ A ALTERAÇÃO: w-1/2 para metade da largura e alinhado à esquerda */}
        <div className="flex bg-orange-brandOrange text-white text-center justify-center font-lemonMilkLight font-[600] text-md py-10 shadow-lg mb-7
          w-1/2 relative z-10 items-start"> 
            <span className="w-full text-center">NOSSAS CONQUISTAS</span> 
        </div>

        {/* Contêiner principal das conquistas (as 3x3 caixas) */}
        {/* Este div já tem max-w-7xl e agora será o próximo elemento da coluna flex principal */}
        {/* removido mx-auto, agora está contido no wrapper acima */}
        <div className="w-full max-w-7xl flex flex-col items-center justify-around gap-12 md:gap-8 bg-orange-brandOrange px-10 py-10 rounded-b-2xl">
          {/* Linha 1: Conquistas */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkLight text-white leading-relaxed px-8">
                Mais de 800 ex membros espalhados pelo Brasil em grandes empresas
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkBold text-white leading-relaxed px-8">
                Mais de 100 projetos executados nos últimos 5 anos
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkLight text-white leading-relaxed px-8">
                Primeira EJ de Comunicação do Centro-Oeste, com mais de 27 anos no mercado
              </p>
            </div>
          </div>
          {/* Linha 2: Conquistas */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkBold text-white leading-relaxed px-8">
                Prêmio Concentra: EJ Alto Crescimento, EJ Impacto, COnectadas
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkLight text-white leading-relaxed px-8">
                NPS Médio de 9
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkBold text-white leading-relaxed px-8">
                Prêmio Concentra: EJ Antifrágil, EJ que faz
              </p>
            </div>
          </div>
          {/* Linha 3: Conquistas */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkLight text-white leading-relaxed px-8">
                Anos consecutivos superando nosso faturamento
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkBold text-white leading-relaxed px-8">
                Prêmio Transamérica
              </p>
            </div>
            <div className="flex flex-col p-6 border-2 border-white rounded-[25px] bg-white/15 shadow-lg md:w-1/3 text-center items-center justify-center">
              <p className="text-center font-lemonMilkLight text-white leading-relaxed px-8">
                Prêmio Colunista
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}