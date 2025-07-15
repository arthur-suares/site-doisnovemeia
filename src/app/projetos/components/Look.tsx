// app/a-gente/components/AboutHeroSection.tsx (agora Look)
'use client';

import React from 'react';
// Mantenha outros imports se existirem e forem usados no componente completo
// import Image from 'next/image';

export default function Look() {
  return (
    <section className="relative w-full bg-gradient-custom-purple py-16 px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-20 text-white">     
        <div className="max-w-4xl mx-auto px-4"> 
          <p className='text-white font-lemonMilkLight text-center'> 
            Dá uma olhada nos projetos que a gente já fez por aí
          </p>
        </div>
      </div>
    </section>
  );
}