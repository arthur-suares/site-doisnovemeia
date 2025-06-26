import React from 'react'
import Register from './components/Register';
import ContactSection from '@/components/ContactSection';
import Letstalk from './components/LetsTalk';

export default function page() {
    return  (
        <main>
            <Register />
            <Letstalk />
        </main>
    );
}