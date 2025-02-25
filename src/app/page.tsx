import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { ServiceProcessBridge } from "./components/ServiceProcessBridge";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
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
    </>
  )
}
