import { FaPhoneAlt } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdRocketLaunch } from 'react-icons/md';
import { FiMonitor } from 'react-icons/fi';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import Section from '../shared/common/section';

const steps = [
    {
        icon: <FaPhoneAlt size={28} />,
        title: 'Discovery Call',
        desc: 'We understand your business and goals.',
        bg: 'bg-purple-500',
    },
    {
        icon: <BsFillGrid3X3GapFill size={28} />,
        title: 'Wireframes & Design',
        desc: 'We share mockups before coding.',
        bg: 'bg-cyan-400',
    },
    {
        icon: <FiMonitor size={28} />,
        title: 'Development Phase',
        desc: 'Fully responsive Shopify build.',
        bg: 'bg-green-400',
    },
    {
        icon: <MdRocketLaunch size={28} />,
        title: 'Launch & Optimiz',
        desc: 'Post-launch support and training.',
        bg: 'bg-indigo-500',
    },
];

export default function HowWeWork() {
    return (
        <Section className="py-10 px-6 text-center bg-gray">
            <div className="py-10">
                <h2 className="text-4xl font-bold text-gray-900 ">How We Work At Inthevisual</h2>
                <p className="text-sm text-gray-500 py-8">Work at inthevisual</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-xl text-white shadow-lg ${step.bg}`}>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
                        <p className="text-gray-600 w-36 mt-2">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
