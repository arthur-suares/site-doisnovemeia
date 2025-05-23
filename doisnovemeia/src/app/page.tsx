'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import boxOrange from "../../public/img/box-orange.svg";
import gotas from "../../public/img/gotas.svg";
import raioAzul from "../../public/img/raio-azul.svg";
import React, { useState } from "react";

export default function Home() {

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    return (
    <main className="h-screen flex flex-col">
      <Header />
      <Hero />
      <section className="bg-gradient-linear-green w-full py-16 px-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="">
          <div className="text-xl font-lemonMilkLight text max-w-2xl text-[#4F4F4F]">
            Somos mais que uma agência, preferimos nos chamar de laboratório de criatividade. A Doisnovemeia não se contenta em copiar o modelo tradicional de agência de publicidade. Atentos às tendências do mercado, mas não presos a elas, criamos um ambiente ideal para inovar nos serviços, nas apresentações de ideias e na experiência do cliente. É isso que faz de nós um laboratório.
          </div>
          <button className="mt-10 bg-white/70 text-white font-bold py-4 px-8 rounded-full transition-transform duration-200"
            onMouseEnter={() => setHoveredIcon('buttonDois')}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ transform: hoveredIcon === 'buttonDois' ? 'scale(1.2)' : 'scale(1)' }}
          >
            <strong className="font-lemonMilkRegular text-[#3E3E3E]">
              SAIBA + SOBRE A DOIS
            </strong>
          </button>
          </div>
          <div>
          <div>
            <Image
              src={boxOrange}
              width={400}
              alt="Logo Dois Nove Meia"
            />
          </div>
          <div className="flex top-[900px] left-[300px]"> 
            <Image
              src={gotas}
              alt="Logo Dois Nove Meia"
            />
          </div>
          <div className=" absolute flex top-[590px] right-[380px]"> 
            <Image
              src={raioAzul}
              alt="Logo Dois Nove Meia"
            />
          </div>
        </div>
      </div>
      </section>
    </main>
    );
}