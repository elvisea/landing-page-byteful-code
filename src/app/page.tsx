'use client';

import React from 'react';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { ServiceProcessBridge } from './components/ServiceProcessBridge';
import { Services } from './components/Services';
import { WhatsAppButton } from './components/WhatsAppButton';

import { usePageTracking } from './hooks/usePageTracking';

export default function Home() {
  usePageTracking({
    pageTitle: 'Home',
    pagePath: '/',
  });

  return (
    <React.Fragment>
      <main>
        <Hero />
        <Services />
        <ServiceProcessBridge />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
    </React.Fragment>
  );
}
