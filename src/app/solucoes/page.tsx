import Hero from '@/components/Hero';
import React from 'react'
import Slogan from './components/Slogan';
import Solutions from './components/Solutions';
import ContactSection from '@/components/ContactSection';

export default function page() {
    return  (
        <main>
            <Slogan />
            <Solutions />
            <ContactSection />
        </main>
    );
}