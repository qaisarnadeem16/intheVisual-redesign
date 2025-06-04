'use client'

import ChooseUS from "./components/home/choose-us";
import HeroSection from "./components/home/hero-section";
import HowWeWork from "./components/home/how-we-work";
import PricingSection from "./components/home/pricing";
import Transform from "./components/home/transform";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Transform/>
      <ChooseUS/>
      <PricingSection/>
      <HowWeWork/>
    </>
  );
}
