import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Projects } from './components/Projects';
import { Tracks } from './components/Tracks';
import { Schedule } from './components/Schedule';
import { FAQ } from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen space-bg">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Projects />
        <Tracks />
        <Schedule />
        <FAQ />
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}

