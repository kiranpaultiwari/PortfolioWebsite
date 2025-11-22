import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
