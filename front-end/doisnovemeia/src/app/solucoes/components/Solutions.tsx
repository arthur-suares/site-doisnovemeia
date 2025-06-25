// app/a-gente/components/AboutHeroSection.tsx
'use client';

import React from 'react';
import { IoIosAdd } from "react-icons/io";

export default function Solutions() {

  return (
    <section className="relative w-full bg-green-brandGreen py-16 px-8 overflow-hidden">

      {/* Conteúdo Principal (Texto e Ninhos) - Acima das imagens decorativas */}
      <div className="mx-auto max-w-7xl relative z-20 text-white">
        {/* Bloco 1*/}
        <div className="max-w-[256px] h-[247px] mx-auto px-4 py-4 items-center justify-center bg-orange-brandOrange">
         <p className='flex text-white font-lemonMilkBold text-justify items-center text-sm leading-relaxed mb-4'>
            nome do serviço</p>
         <p className='flex text-white font-lemonMilkLight text-justify items-center text-sm leading-relaxed'>
            Descrição do serviço</p>
            <IoIosAdd className='absolute bottom-4 text-white text-2xl'>
            </IoIosAdd>  
        </div>
      </div>
    </section>
  );
}