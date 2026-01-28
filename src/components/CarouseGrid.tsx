"use client";

import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";

export default function CarouselGrid() {
  const [page, setPage] = useState(0);
  const totalPages = 2;

  function nextPage() {
    setPage((prev) => (prev + 1) % totalPages);
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 mb-12">
      {/* Área visível */}
      <div className="relative w-full max-w-6xl">
  
  {/* Área com overflow */}
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${page * 100}%)` }}
    >
      {/* Página 1 */}
      <div className="min-w-full grid grid-cols-4 gap-6 px-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-gray-300" />
        ))}
      </div>

      {/* Página 2 */}
      <div className="min-w-full grid grid-cols-4 gap-6 px-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-gray-300" />
        ))}
      </div>
    </div>
  </div>

  {/* Botão azul (fora do overflow) */}
  <button
    onClick={nextPage}
    className="absolute -right-14 top-1/2 -translate-y-1/2 
               w-12 h-12 rounded-full bg-[#A829F933]/20
               flex items-center justify-center 
               text-[#3E3E3E] hover:scale-110 transition"
  >
    <TiArrowRight size={26} />
  </button>
</div>


      {/* Bolinhas */}
      <div className="flex gap-3">
        {[0, 1].map((dot) => (
          <button
            key={dot}
            onClick={() => setPage(dot)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              page === dot
                ? "bg-purple-brandPurle scale-110"
                : "bg-purple-200 hover:scale-110"
            }`}
            aria-label={`Ir para página ${dot + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
