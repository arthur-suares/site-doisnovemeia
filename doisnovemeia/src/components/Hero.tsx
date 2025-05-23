import Image from "next/image";
import icondoisWhite from "../../public/img/logo-white.svg";
import raioVerde from "../../public/img/raio-verde.svg";
import raioLaranja from "../../public/img/raios-laranja.svg";

export default function Hero() { 

    return (
        <section className="bg-gradient-linear-purple w-full py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Lado Esquerdo - Gráfico */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center justify-center">
            <Image
              src={icondoisWhite}
              alt="Logo Dois Nove Meia"
            />
          </div>
          <div className="absolute flex top-[190px] left-[300px]">
            <Image
              src={raioLaranja}
              alt="Logo Dois Nove Meia"
              className="animate-flash-bug"
            />
          </div>
          <div className="absolute flex top-[430px] left-[650px]"> 
            <Image
              src={raioVerde}
              alt="Logo Dois Nove Meia"
              className="animate-flash-bug"
            />
          </div>
        </div>

        {/* Lado Direito - Texto */}
        <div className="text-white max-w-xl">
          <h1 className="text-md font-lemonMilkLight mb-6">
            Prazer, doisnovemeia.
          </h1>
          <h1 className="text-md font-lemonMilkLight mb-6">Pode nos chamar de dois.</h1>
          <p className="mb-4 text-md font-lemonMilkLight">
            Somos a empresa júnior de Publicidade da Universidade de Brasília,
            fundada em 1996 que desde então une jovens visionários e ousados
            que não têm medo de experimentar, porque só é criativo quem se arrisca.
          </p>
          <p className="mb-6 text-md font-lemonMilkLight">
            Quer saber mais sobre o que fazemos?
          </p>
          <button className="bg-white/40 text-white font-bold py-4 px-8 rounded-full hover:bg-purple-brandPurle transition font-lemonMilkBold text-md">
            Veja aqui nossas soluções
          </button>
        </div>
      </div>
    </section>
    )
}