import { FaPhoneAlt } from 'react-icons/fa';
import phone from '/public/assets/phone.svg';
import wireframe from '/public/assets/wireframe.svg';
import development from '/public/assets/development.svg';
import launch from '/public/assets/launch.svg';
import Section from '../shared/common/section';
import Image from 'next/image';

const steps = [
    {
        icon: phone,
        title: 'Discovery Call',
        desc: 'We understand your business and goals.',
        bg: 'bg-purple-500',
        shadow: 'shadow-purple-500/50', // Shadow color matching bg-purple-500
    },
    {
        icon: wireframe,
        title: 'Wireframes & Design',
        desc: 'We share mockups before coding.',
        bg: 'bg-cyan-400',
        shadow: 'shadow-cyan-400/50', // Shadow color matching bg-cyan-400
    },
    {
        icon: development,
        title: 'Development Phase',
        desc: 'Fully responsive Shopify build.',
        bg: 'bg-green-400',
        shadow: 'shadow-green-400/50', // Shadow color matching bg-green-400
    },
    {
        icon: launch,
        title: 'Launch & Optimize',
        desc: 'Post-launch support and training.',
        bg: 'bg-indigo-500',
        shadow: 'shadow-indigo-500/50', // Shadow color matching bg-indigo-500
    },
];

export default function HowWeWork() {
    return (
        <Section className="py-10 px-6 text-center bg-gray">
            <div className="py-10">
                <h2 className="text-5xl lg:text-6xl tracking-tight font-bricola font-normal">How We Work At Inthevisual</h2>
                <p className="text-base font-poppins  py-5">Work at Inthevisual</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center p-6 rounded-2xl ${step.shadow} `} // Added shadow and background
                    >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white shadow-lg ${step.bg}`}>
                            <Image src={step.icon} alt={step.title} className="h-9 w-9" />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
                        <p className="text-gray-600 md:w-36 mt-2">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}