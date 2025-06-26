import React from 'react'
import BlogTitle from './components/BlogTitle';
import MainContent from './components/MainContent';
import ContactSection from '@/components/ContactSection';

export default function page() {
    return  (
        <main>
            <BlogTitle />
            <MainContent />
            <ContactSection />
        </main>
    );
}