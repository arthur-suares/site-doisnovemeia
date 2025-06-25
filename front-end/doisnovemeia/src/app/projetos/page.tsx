import React from 'react'
import Look from './components/Look';
import Projects from './components/Projects';
import ContactSection from '@/components/ContactSection';

export default function page() {
    return  (
        <main>
            <Look />
            <Projects />
            <ContactSection />
        </main>
    );
}