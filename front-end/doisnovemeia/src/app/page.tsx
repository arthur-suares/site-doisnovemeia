'use client'

import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import PartnersAndClients from "@/components/PartnetsAndClients";

export default function Home() {

    return (
    <main className="flex flex-col max-w-full">
      <Hero />
      <Hero2 />
      <Hero3 />
      <PartnersAndClients />
    </main>
    );
}