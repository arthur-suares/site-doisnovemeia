'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

import React, { useState } from "react";

export default function Home() {

    return (
    <main className="h-screen flex flex-col max-w-full">
      <Header />
      <Hero />
      <Hero2 />
    </main>
    );
}