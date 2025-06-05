import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-[#F4F4F4] rounded-lg mb-4 py-3 overflow-hidden transition-all">
            <button
                type="button"
                className="w-full text-left p-4  font-medium flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='font-bricola'>{question}</span>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>
            <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
                    }`}
            >
                <p className="text-[#6A6A86] font-poppins text-base max-w-2xl">{answer}</p>
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
    const faqs: FAQItemProps[] = [
        {
            question: 'How does the subscription work?',
            answer:
                'Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!',
        },
        {
            question: 'How fast can I expect my tasks to be completed?',
            answer:
                'Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!',
        },
        {
            question: 'Can I cancel or upgrade my subscription?',
            answer:
                'Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!',
        },
        {
            question: 'Do you offer refunds?',
            answer:
                'Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!',
        },
        {
            question: 'How do I make a payment?',
            answer:
                'Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!',
        },
    ];

    return (
        <section className="py-16 bg-white ">
            <div className="max-w-5xl mx-auto md:px-6 px-2">
                <h2 className="text-5xl lg:text-6xl text-center tracking-tight font-bricola font-normal">Got Questions?</h2>
                <h3 className="text-[44px] lg:text-6xl text-center tracking-tight font-bricola font-normal">We’ve Got Answers!</h3>
                <div className="py-7">
                    <p className='text-base font-poppins text-[#6A6A86] text-center max-w-xl mx-auto'>Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!</p>
                </div>
                <div className="py-5">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
