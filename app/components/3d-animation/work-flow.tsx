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
        title: 'Storyboarding & Motion Planning',
        desc: 'Key movements and timings are mapped and approved.',
        bg: 'bg-purple-500',
        shadow: 'shadow-purple-500/50', 
    },
    {
        icon: wireframe,
        title: 'Modeling & Rigging',
        desc: 'We create all assets or use your provided ones, rig characters if needed.',
        bg: 'bg-cyan-400',
        shadow: 'shadow-cyan-400/50', 
    },
    {
        icon: development,
        title: ' Animation & Effects',
        desc: 'We bring it to life with camera work, transitions, and effects.',
        bg: 'bg-green-400',
        shadow: 'shadow-green-400/50', 
    },
    {
        icon: launch,
        title: 'Sound & Delivery',
        desc: ' Voiceover, music, or effects added — then exported to your needed formats.',
        bg: 'bg-indigo-500',
        shadow: 'shadow-indigo-500/50', 
    },
];

export default function WorkFlow() {
    return (
        <Section className="py-10 px-6 text-center bg-gray">
            <div className="py-10">
                <h2 className="text-5xl lg:text-6xl tracking-tight font-bricola font-normal">Our Animation Workflow</h2>
                <p className="text-base font-poppins  font-medium py-5"> From Storyboards to Final Frames — Our Process</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col transition-all duration-100 hover:scale-105 ease-in-out cursor-pointer items-center p-6 rounded-2xl ${step.shadow} `} 
                    >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white shadow-lg ${step.bg}`}>
                            <Image src={step.icon} alt={step.title} className="h-9 w-9" />
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
                        <p className="text-gray-600  mt-2">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}