import { FaPhoneAlt } from 'react-icons/fa';
import Section from '../shared/common/section';
import Image from 'next/image';

const steps = [
  {
    icon: '/assets/award.png', 
    title: 'Personal attention',
    desc: '& expert output.',
    bg: 'bg-purple-500',
    shadow: 'shadow-purple-500/50',
  },
  {
    icon: '/assets/team.png',
    title: '20-person team',
    desc: 'With UI/UX, Shopify Dev, & Integration experts.',
    bg: 'bg-cyan-400',
    shadow: 'shadow-cyan-400/50',
  },
  {
    icon: '/assets/award.png',
    title: 'Proven results',
    desc: 'across US, UK, and EU brands.',
    bg: 'bg-green-400',
    shadow: 'shadow-green-400/50',
  },
  {
    icon: '/assets/signal.png',
    title: 'Fast turnaround',
    desc: 'transparent pricing, no fluff.',
    bg: 'bg-indigo-500',
    shadow: 'shadow-indigo-500/50',
  },
];

export default function HowWeWork() {
  return (
    <Section className="py-10 px-6 text-center bg-gray">
      <div className="py-10">
        <h2 className="text-5xl lg:text-6xl tracking-tight font-bricola font-normal">
          How We Work At Inthevisual
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-2xl ${step.shadow}`}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white shadow-lg ${step.bg}`}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={40} 
                height={40} 
                className="object-contain" 
              />
            </div>
            <h3 className="text-xl font-poppins font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 md:w-36 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}