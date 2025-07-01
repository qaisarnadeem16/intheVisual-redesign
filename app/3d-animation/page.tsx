import React from 'react'
import HeroSection from '../components/shared/common/hero-section'
import Transform from '../components/3d-animation/demo-section'
import SuccessStories from '../components/3d-animation/success-stories'
import AnimationFeaturesSection from '../components/3d-animation/3d-featured'
import PricingSection from '../components/3d-animation/pricing'
import GetQuestions from '../components/home/get-question'
import WorkFlow from '../components/3d-animation/work-flow'

const Animation = () => {
    return (
        <div>
            <HeroSection
                title=' High-Impact 3D' title2='Animation ' title3=' That Brings Ideas to Life' subtitle=' From product intros and architectural walkthroughs to character and cinematic brand stories — our 3D animation team creates motion that moves people and drives results.'
                buttonText='Get Started'
            />
            <Transform />
            <AnimationFeaturesSection />
            <PricingSection />
            <SuccessStories />
            <WorkFlow/>
            <GetQuestions
                heading1='Need a 3D Animation That Sells'
                heading2='Shows, or Stuns?'
                description='We animate products, people, and places with the clarity and polish your audience expects.'
                buttonLink='/'
                buttonText='Get Quote'
            />
        </div>
    )
}

export default Animation