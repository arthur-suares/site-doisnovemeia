// app/a-gente/components/AboutHeroSection.tsx (agora Look)
'use client';

import React from 'react';
// Mantenha outros imports se existirem e forem usados no componente completo
// import Image from 'next/image';

export default function BlogTitle() {
  return (
    <section className="relative w-full bg-gradient-custom-purple py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-20 text-white">     
        <div className="max-w-5xl mx-auto"> 
          <p className='text-white font-lemonMilkLight text-center'> 
            Fique por dentro de todas as novidades e saiba tudo sobre comunicação publicitária e tendências do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}