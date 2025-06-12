'use client'

import ChooseUS from "./components/home/choose-us";
import FAQSection from "./components/home/faq-section";
import GetQuestions from "./components/home/get-question";
import HeroSection from "./components/home/hero-section";
import HowWeWork from "./components/home/how-we-work";
import PricingSection from "./components/home/pricing";
import ReviewCarousel from "./components/home/review-section";
import SuccessStories from "./components/home/success-story";
import Transform from "./components/home/transform";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Transform />
      <ChooseUS />
      <SuccessStories />
      <PricingSection />
      <HowWeWork />
      <ReviewCarousel />
      <FAQSection />
      <GetQuestions
        heading1="Got Questions?"
        heading2="We’ve Got Answers!"
        description="Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!"
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
}
