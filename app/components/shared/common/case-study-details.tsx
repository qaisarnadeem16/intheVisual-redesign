'use client';
import { caseStudies } from '@/data/caseStudies';
import CustomLink from './custom-link';
import overview from '/public/assets/overview.png'
import Image from 'next/image';
import Section from './section';

interface CaseStudy {
    name: string;
    slug: string;
    overview: { title: string; content: string };
    challenge: { title: string; points: string[] };
    solution: {
        title: string;
        steps: { step: string; details: string[] }[];
        key_features?: string[];
        tech_stack?: { frontend: string[]; backend: string[]; integrations: string[] };
        execution_process?: string[];
        software_render_engines?: { modeling_animation: string; rendering_environment: string; render_engines: string[] };
    };
    results: { title: string; points: string[]; final_video?: string };
}

interface CaseStudyDetailProps {
    slug: string;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ slug }) => {
    const caseStudy = caseStudies.find((study: any) => study.slug === slug);

    if (!caseStudy) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-darkblue mb-4">Case Study Not Found</h1>
                </div>
            </div>
        );
    }

    const isHighlighted = ['bare-naked-bakery', 'kinetik-adrenalinx'].includes(slug);
    const cardBgColor = isHighlighted ? 'bg-darkblue' : 'bg-white';
    const textColor = isHighlighted ? 'text-primary' : 'text-darkblue';

    return (
        <>
            <div>
                <div className="py-12">
                    <Section>
                        <div className="max-w-6xl mx-auto">
                            <CustomLink href="/" className={` hover:text-white text-base mb-4 group `}>
                                Case Studies &gt; <span className={`text-[#060635] font-bricola  hover:text-white`}>{caseStudy.name}</span>
                            </CustomLink>

                            <div className="grid grid-cols-1 py-8 items-center md:grid-cols-2 ">
                                <div className="">
                                    <Image src={overview} alt='overview' className='' />
                                </div>
                                <div className="">
                                    <p className='font-bricola text-3xl'>Project Overview</p>
                                    <p className={`text-lg font-poppins font-normal text-[#6A6A86]`}>{caseStudy.overview.content}</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <div className="py-10 bg-gray">
                        <Section>
                            <div className="max-w-6xl mx-auto justify-center">
                                <div className="text-center py-10">
                                    <h2 className={`text-6xl font-bricola font-normal `}>{caseStudy.challenge.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
                                    {caseStudy.challenge.points.map((point: string, index: number) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center space-y-4 min-h-[200px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                                        >
                                            <div className="text-5xl font-bricola text-[#c2bebe]">{String(index + 1).padStart(2, '0')}</div>
                                            <p className="text-base font-medium text-gray-700 max-w-[250px]">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Section>
                    </div>

                    <div className="py-6 text-center max-w-6xl mx-auto">
                        <Section>
                            <div className="py-6">
                                <h2 className={`text-6xl font-bricola font-normal`}>{caseStudy.solution.title}</h2>
                                <p className="text-base font-poppins max-w-3xl mx-auto py-2 text-[#6A6A86] font-normal">
                                    See how we've helped these businesses transform their online presence and achieve remarkable results.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {caseStudy.solution.steps.map((step: any, index: number) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl p-6 border-2 border-dashed"
                                        style={{
                                            borderColor: index % 2 === 0 ? '#D9B8FF' : '#F5A09D'
                                        }}
                                    >
                                        <h3 className={`text-2xl font-bricola py-4 font-medium`}>{step.step}</h3>
                                        <ul className="space-y-2 text-left text-base text-gray-600">
                                            {step.details.map((detail: any, i: number) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="">
                                                        <svg width="24" height="25" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M24.9375 15.8126C24.0625 20.1876 20.7638 24.3071 16.135 25.2276C13.8775 25.6772 11.5357 25.403 9.44303 24.4443C7.35037 23.4855 5.61354 21.8909 4.47984 19.8876C3.34615 17.8843 2.87338 15.5744 3.12887 13.2868C3.38435 10.9991 4.35506 8.85042 5.90278 7.14658C9.07728 3.65008 14.4375 2.68758 18.8125 4.43758" stroke="#504CEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.0625 14.0625L14.4375 18.4375L24.9375 7.0625" stroke="#504CEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {caseStudy.solution.key_features && (
                                <div className="py-10 text-center">
                                    <h3 className={`text-6xl font-bricola py-3`}>Key Features</h3>
                                    <ul className="text-base">
                                        {caseStudy.solution.key_features.map((feature: string, i: number) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {caseStudy.solution.tech_stack && (
                                <div className="py-10 text-center">
                                    <h3 className={`text-6xl font-bricola py-3`}>Tech Stack</h3>
                                    <ul className="text-base  py-3 text-gray-700">
                                        <li><strong>Frontend:</strong> {caseStudy.solution.tech_stack.frontend.join(', ')}</li>
                                        <li><strong>Backend:</strong> {caseStudy.solution.tech_stack.backend.join(', ')}</li>
                                        <li><strong>Integrations:</strong> {caseStudy.solution.tech_stack.integrations.join(', ')}</li>
                                    </ul>
                                </div>
                            )}

                            {caseStudy.solution.execution_process && (
                                <div className="py-10 text-center">
                                    <h3 className={`text-6xl font-bricola mb-3 `}>Execution Process</h3>
                                    <ul className="text-base font-poppins text-[#6A6A86] font-normal">
                                        {caseStudy.solution.execution_process.map((process: string, i: number) => (
                                            <li key={i}>{process}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {caseStudy.solution.software_render_engines && (
                                <div className="py-10 text-center">
                                    <h3 className={`text-5xl font-bricola mb-3 `}>Software & Render Engines</h3>
                                    <ul className="text-base font-poppins text-[#6A6A86] font-normal">
                                        <li><strong>Modeling & Animation:</strong> {caseStudy.solution.software_render_engines.modeling_animation}</li>
                                        <li><strong>Rendering Environment:</strong> {caseStudy.solution.software_render_engines.rendering_environment}</li>
                                        <li><strong>Render Engines:</strong> {caseStudy.solution.software_render_engines.render_engines.join(', ')}</li>
                                    </ul>
                                </div>
                            )}
                        </Section>
                    </div>


                    <div className="py-6 max-w-6xl mx-auto">
                        <Section>
                            <div>
                                <h2 className="text-6xl text-center font-bricola">
                                    {caseStudy.results.title}
                                </h2>
                            </div>

                            <div className="text-center flex flex-col items-center gap-4 py-4">
                                <ul className="text-lg font-poppins text-[#6A6A86] font-normal">
                                    {caseStudy.results.points.map((point: any, index: any) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>

                            
                                {(caseStudy.results.image || caseStudy.results.final_video) && (
                                    <div className="py-5">

                                        {caseStudy.results.image && (
                                            <Image
                                                src={caseStudy.results.image}
                                                alt="Case Study Result"
                                                className="w-auto h-auto rounded-lg shadow-lg"
                                            />
                                        )}

                                        {caseStudy.results.final_video && (
                                            <video controls className="w-full max-w-3xl mx-auto mt-4">
                                                <source
                                                    src={`/videos/${caseStudy.results.final_video}.mp4`}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudyDetail;