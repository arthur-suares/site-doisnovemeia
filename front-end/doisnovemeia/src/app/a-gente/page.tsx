import React from 'react'
import AboutHeroSection from './components/AboutHeroSection';
import EggSection from './components/EggSection';
import OurStorySection from './components/OurStorySection';
import OurVictorys from './components/OurVictorys';
import Hall from './components/Hall';
import ContactSection from '@/components/ContactSection';

export default function page() {
    return  (
        <main>
            <AboutHeroSection />
            <EggSection />
            <OurStorySection />
            <OurVictorys />
            <Hall />
            <ContactSection />
        </main>
    );
}