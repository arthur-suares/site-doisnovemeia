// app/components/DiferencialBox.tsx
'use client'; // Necessário para usar useState

import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';

interface DiferencialBoxProps {
  title: string;
  content: string; // O conteúdo que aparece ao passar o mouse
}

export default function DiferencialBox({ title, content }: DiferencialBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-blue-brandBlue text-[#3E3E3E] w-full rounded-full py-3 px-6 cursor-pointer flex items-center justify-between shadow-lg mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-lemonMilkBold text-md md:text-lg">{title}</span>
      <div className="ml-4 p-2 bg-white/40 rounded-full">
        <IoAddOutline size={24} className="text-[#3E3E3E] font-bold" />
      </div>

      {/* Conteúdo Flutuante ao Hover */}
      <div
        className={`absolute z-20 bg-white p-4 rounded-lg shadow-xl min-w-[200px] transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 translate-y-[-100%] scale-100 animate-float-slow' : 'opacity-0 translate-y-0 scale-95 pointer-events-none'}
          bottom-full left-1/2 -translate-x-1/2 mb-2 // Posiciona acima e centralizado
          `}
      >
        <p className="text-gray-800 text-sm font-lemonMilkLight">{content}</p>
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
      </div>
    </div>
  );
}