// app/a-gente/components/AboutHeroSection.tsx (agora Look)
'use client';

import React from 'react';
// Mantenha outros imports se existirem e forem usados no componente completo
// import Image from 'next/image';

export default function Slogan() {
  return (
    <section className="relative w-full bg-gradient-custom-purple py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-20 text-white">     
        <div className="max-w-5xl mx-auto"> 
          <p className='text-white font-lemonMilkLight text-center'> 
            Vender serviços é o básico na nossa carta de soluções. Oferecemos não só projetos, mas buscamos os resultados que nossos clientes realmente procuram com propostas personalizadas. Nós estamos aqui para garantir que cada trabalho se torne um case
          </p>
        </div>
      </div>
    </section>
  );
}