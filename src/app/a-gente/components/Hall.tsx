// app/components/PartnersAndClients.tsx
'use client';

import CarouselGrid from "@/components/CarouseGrid";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Hall() {
  const router = useRouter();

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

        <CarouselGrid />

        <div className="flex flex-row mt-10 justify-center items-center gap-6">
            <p className="text-[#3E3E3E] font-lemonMilkRegular">
                Também quer entrar nessa lista? 
            </p>
            <button onClick={() => router.push("/trabalhe-com-a-gente")} className="bg-[#87D2E8] text-[#3E3E3E] py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300">
                <strong className="font-lemonMilkBold">
                Saiba como se tornar membro
                </strong>
          </button>
        </div>
      </div>
    </section>
  );
}