// app/a-gente/components/EggSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

// Caminho da imagem do ovo (ajuste conforme a estrutura do seu projeto)
import eggImage from '../../../../public/img/egg.svg'; 

export default function EggSection() {

  return (
    <section className="relative w-full bg-gradient-linear-orange py-[100px] px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8">
        {/* Coluna 1: Missão */}
        <div className="flex flex-col p-6 border-2 border-white rounded-[40px] bg-white/20 shadow-lg md:w-1/3">
          <h2 className="text-2xl font-lemonMilkBold text-white mb-8 mt-4 px-8">MISSÃO</h2>
          <p className="text-justify font-lemonMilkLight text-white leading-relaxed px-8 mb-6">
            Ser porta para criar e crescer marcando histórias e quebrando paradigmas. </p>
        </div>

        {/* Coluna do Meio: Imagem do Ovo */}
        <div className="flex-shrink-0">
          <Image
            src={eggImage}
            alt="Imagem de um ovo representando o início e o potencial"
            width={180} // Ajuste o tamanho conforme o design e a resolução da sua imagem
            height={180} // Mantenha a proporção
            className="h-auto w-auto object-contain"
          />
        </div>

        {/* Coluna 3: Visão */}
        <div className="flex flex-col p-6 border-2 border-white rounded-[40px] bg-white/20 shadow-lg md:w-1/3">
          <h2 className="text-2xl font-lemonMilkBold text-white mb-8 mt-4 px-8">VISÃO</h2>
          <p className="text-base font-lemonMilkLight text-white leading-relaxed px-8 mb-4">
            proporcionar um laboratório de ideias que transforma todo projeto em case. </p>
        </div>
      </div>
      
    </section>
  );
}