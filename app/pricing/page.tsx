import React from 'react'
import HeroSection from '../components/pricing/hero-section'
import HowWeWork from '../components/pricing/how-we-work'
import PricingSummary from '../components/pricing/pricing-summary'
import MaintenancePlans from '../components/pricing/maintinance'
import OptionalAddOns from '../components/pricing/optional-add'

const Pricing = () => {
    return (
        <div>
            <HeroSection/>
            <HowWeWork/>
            <PricingSummary/>
            <MaintenancePlans/>
            <OptionalAddOns/>
        </div>
    )
}

export default Pricing