// components/SuccessStories.tsx
import Image, { StaticImageData } from 'next/image';
import bakery from '/public/assets/bakery.png';
import Section from '../shared/common/section';

interface SuccessStoryProps {
    title: string;
    description: string;
    imageSrc: StaticImageData; // ✅ Correct type
    imageAlt: string;
    buttonText: string;
    bgColor: string;
    imagePosition: 'left' | 'right';
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    bgColor,
    imagePosition,
}) => (
    <div className="">
        <div className={`${bgColor}`}>
            <Section>
                <div>
                    <div className="max-w-7xl mx-auto  grid md:grid-cols-2 grid-cols-1 items-center">
                        {/* Image block */}
                        <div className={`${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                className=""
                            />
                        </div>

                        {/* Text block */}
                        <div className={`w-full ${imagePosition === 'right' ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'} text-left mt-8 md:mt-0`}>
                            <h2 className="text-4xl lg:text-6xl py-5 tracking-tight font-bricola font-normal">{title}</h2>
                            <p className="text-[#6A6A86] font-poppins mb-6">{description}</p>
                            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#9B17D0] to-[#C53B08]">
                                <button
                                    type="button"
                                    className="bg-white underline px-3 md:px-6 py-2 text-base gap-3 rounded-full flex items-center justify-center font-semibold hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08] hover:text-white transition w-full h-full"
                                >
                                    {buttonText}
                                    <span className="">
                                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 34.6831L34 14.6831M34 14.6831H14M34 14.6831V34.6831" stroke="#1E1E1E" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </Section>
        </div>
    </div>
);

// Parent Component
export default function SuccessStories() {
    return (
        <>
            <div className="">
                <div className="text-center">
                    <h1 className='text-5xl lg:text-6xl tracking-tight font-bricola font-normal'>Our Success Stories</h1>
                    <p className='text-[#6A6A86] max-w-md py-6 mx-auto  font-poppins text-sm md:text-base'>see how we've helped these businesses transform their online presence and achieve remarkable results.</p>
                </div>
                <SuccessStory
                    title="Bare Naked Bakery’s"
                    description="We revamped Bare Naked Bakery’s Shopify store by combining a sleek new design with an interactive custom product customizer. Customers can now explore products more easily, personalize their orders visually, and enjoy a smoother, more engaging shopping experience. The result? Increased time on site—and a clear boost in custom cake sales."
                    imageSrc={bakery}
                    imageAlt="Bare Naked Bakery"
                    buttonText="Click To View Full Case Study"
                    bgColor="bg-gray"
                    imagePosition="right"
                />
                <SuccessStory
                    title="Knockout Fight Gear"
                    description="We helped Knockout Fight Gear transform their Shopify store with a bold new design and an intuitive custom product customizer. From selecting sizes to live pricing updates, customers now enjoy a smooth, branded shopping experience tailored to athletes. The result? Higher engagement, better conversions, and stronger brand loyalty."
                    imageSrc={bakery}
                    imageAlt="New Success Story"
                    buttonText="Click To View Full Case Study"
                    bgColor="bg-white"
                    imagePosition="left"
                />
            </div>
        </>
    );
}
