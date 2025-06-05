import React from 'react'
import Section from '../shared/common/section'
import CustomLink from '../shared/common/custom-link'
import Link from 'next/link'

const GetQuestions = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <Section >
                <div className='bg-gradient-to-bl space-y-3 py-20 from-[#ebc8ba] via-[#d3d3eb] to-[#bbbad5] rounded-2xl'>
                    <div className="text-[42px] lg:text-6xl text-center tracking-tight font-bricola font-normal">
                        <h1>Got Questions? </h1>
                        <h1>We’ve Got Answers!</h1>
                    </div>

                    <div className="">
                        <p className='text-base font-poppins text-[#6A6A86] text-center max-w-xl mx-auto'>Curious about something? We’re here to clear up any doubts and provide all the details you need. Let us guide you every step of the way!</p>
                    </div>
                    <div className="flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105 py-3">
                        <div className="inline-block rounded-full  bg-gradient-to-r from-[#9B17D0] to-[#C53B08] p-[1px]">
                            <div className="bg-transparent rounded-full">
                                <Link
                                    href={'/contact'}
                                    type="button"
                                    className="bg-transparent text-white   px-4 py-2 text-base rounded-full flex items-center justify-center font-semibold "
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    )
}

export default GetQuestions