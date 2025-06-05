import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Note } from './Note.jsx';

export function App() {
    return (
        <div>
            <Header />
            <Note className = "note"/>
            <Footer />
        </div>
    );
}