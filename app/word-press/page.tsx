import React from 'react'
import HeroSection from '../components/shared/common/hero-section'
import WordPressFeaturesSection from '../components/wordpress/wordpress-features'
import PricingSection from '../components/wordpress/pricing'
import SuccessStories from '../components/wordpress/wordpress-successStroy'
import GetQuestions from '../components/home/get-question'

const WordPress = () => {
    return (
        <div>
            <HeroSection
                title='Custom WordPress'
                title2='Sites '
                title3='Built to Perform'
                subtitle='At inthevisual, we design and develop WordPress websites that are not only beautiful but also SEO-optimized, lightning-fast, and built to convert.' buttonText='Get Started'
            />
            <WordPressFeaturesSection />
            <SuccessStories />
            <PricingSection />
            <GetQuestions
                heading1="Got Questions?"
                heading2="We’ve Got Answers!"
                description="Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!"
                buttonText="Get Started"
                buttonLink="/contact"
            />
        </div>
    )
}

export default WordPress