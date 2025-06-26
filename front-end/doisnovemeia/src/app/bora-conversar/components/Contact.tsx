'use client';

import React from 'react';
// Import necessary icons from react-icons
import { CiCalendar } from 'react-icons/ci';
import { FaRegClock, FaRegMap, FaRegEnvelope } from "react-icons/fa";
import { FiSmartphone } from 'react-icons/fi';

export default function Contact() {
  return (
    <section className="relative w-full bg-purple-brandPurle py-16 px-8 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 mx-auto max-w-7xl">

        {/* --- Card 1: ONDE NOS ENCONTRAR (Permanece igual) --- */}
        <div
          className="w-full max-w-lg px-4 py-16 rounded-[40px]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
            border: '2px solid #FFFFFF',
            backdropFilter: 'blur(17px)',
            WebkitBackdropFilter: 'blur(17px)'
          }}
        >
          {/* Card Title */}
          <h3 className="font-lemonMilkBold text-lg text-white mb-6">ONDE NOS ENCONTRAR</h3>

          {/* Address Block */}
          <div className="flex items-start mb-4">
            <FaRegMap className="text-blue-brandBlue text-2xl mr-3 mt-1" />
            <p className="text-white font-lemonMilkLight text-sm leading-relaxed">
              UNIVERSIDADE DE BRASÍLIA, ICC NORTE, <br />
              BLOCO A SALA AT-626, PORTA VERDE, <br />
              SHCN, BRASÍLIA - DF, 70910-900
            </p>
          </div>

          {/* Days of Week Block */}
          <div className="flex items-center mb-4">
            <CiCalendar className="text-blue-brandBlue text-xl mr-3" />
            <p className="text-white font-lemonMilkLight text-sm">SEGUNDA A SEXTA</p>
          </div>

          {/* Hours Block */}
          <div className="flex items-center">
            <FaRegClock className="text-blue-brandBlue text-xl mr-3" />
            <p className="text-white font-lemonMilkLight text-sm">14H ÀS 18H</p>
          </div>
        </div>

        {/* --- GRUPO DE CONTATO (Círculo + Card) --- */}
        {/*
          NOVA ESTRUTURA:
          1. Um 'div' pai com 'relative' para servir de âncora para o círculo.
          2. O círculo agora tem 'absolute' para flutuar.
          3. O card de contato ganha um padding-top grande ('pt-24') para criar espaço para o círculo.
        */}
        <div className="relative w-full max-w-lg">
          {/* Círculo da Foto (Posicionado de forma absoluta) */}
          <div className="absolute top-[-96] left-1/2 -translate-x-1/2 z-10">
            <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-center p-4 font-lemonMilkBold text-gray-700 text-sm">
              ESPAÇO PARA FOTO DO DIRETOR DE ATENDIMENTO
            </div>
          </div>

          {/* Card de Contato (Com espaço no topo para a foto) */}
          <div
            className="w-full px-8 pb-8 pt-12 rounded-[40px] shadow-lg" // Padding modificado aqui
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.144) 0%, rgba(255, 255, 255, 0.2) 100%)',
              border: '2px solid #FFFFFF',
              backdropFilter: 'blur(17px)',
              WebkitBackdropFilter: 'blur(17px)'
            }}
          >
            {/* O 'mt-8' foi removido do h3 pois o padding do card já cria o espaço */}
            <h3 className="font-lemonMilkBold text-lg text-white mb-6 text-start">CONTATO</h3>

            {/* Phone Contact Block */}
            <div className="flex items-center mb-4">
              <FiSmartphone className="text-blue-brandBlue text-xl mr-3" />
              <p className="text-white font-lemonMilkLight text-sm">(XX) XXXXX-XXXX</p>
            </div>

            {/* Email Contact Block */}
            <div className="flex items-center">
              <FaRegEnvelope className="text-blue-brandBlue text-xl mr-3" />
              <p className="text-white font-lemonMilkLight text-sm">XXXXXXXX@DOISNOVEMEIA.COM.BR</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}