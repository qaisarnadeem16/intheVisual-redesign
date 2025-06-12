import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Section from './section';


interface SuccessStoryProps {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    buttonText: string;
    bgColor: string;
    imagePosition: 'left' | 'right';
    slug: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    bgColor,
    imagePosition,
    slug,
}) => (
    <div>
        <div className={bgColor}>
            <Section className='!py-8'>
                <div>
                    <div className="max-w-7xl mx-auto py-3 grid md:grid-cols-2 grid-cols-1 items-center">
                        <div className={`flex justify-evenly items-end ${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                            <Image src={imageSrc} alt={imageAlt} className="w-auto h-full " />
                        </div>
                        <div
                            className={`w-full ${imagePosition === 'right' ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'
                                } text-left mt-8 md:mt-0`}
                        >
                            <h2 className="text-4xl lg:text-6xl py-5 tracking-tight font-bricola font-normal">{title}</h2>
                            <p className="text-[#6A6A86] font-poppins mb-6">{description}</p>
                            <div className="inline-block p-[1px] my-7 rounded-full bg-gradient-to-r from-[#9B17D0] to-[#C53B08]">
                                <Link href={`/case-studies/${slug}`} className='group '>
                                    <button
                                        type="button"
                                        className="bg-white underline px-3 md:px-6 py-2 text-base gap-3 rounded-full flex items-center justify-center font-semibold hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08] hover:text-white transition w-full h-full"
                                    >
                                        {buttonText}
                                        <span className="group inline-block">
                                            <svg
                                                width="48"
                                                height="49"
                                                viewBox="0 0 48 49"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14 34.6831L34 14.6831M34 14.6831H14M34 14.6831V34.6831"
                                                    className="stroke-[#1E1E1E] stroke-opacity-70 group-hover:stroke-white transition-all duration-300"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    </div>
);

export default SuccessStory