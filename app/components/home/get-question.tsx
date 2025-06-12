import React from 'react'
import Section from '../shared/common/section'
import Link from 'next/link'

type GetQuestionsProps = {
  heading1?: string
  heading2?: string
  description?: string
  buttonText?: string
  buttonLink: string
}

const GetQuestions: React.FC<GetQuestionsProps> = ({
  heading1,
  heading2,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Section>
        <div className="bg-gradient-to-bl space-y-3 py-20 from-[#ebc8ba] via-[#d3d3eb] to-[#bbbad5] rounded-2xl">
          <div className="text-[42px] lg:text-6xl text-center tracking-tight font-bricola font-normal">
            <h1>{heading1}</h1>
            <h1>{heading2}</h1>
          </div>

          <div>
            <p className="text-base font-poppins text-[#6A6A86] text-center max-w-xl mx-auto">
              {description}
            </p>
          </div>

          <div className="flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105 py-3">
            <div className="inline-block rounded-full bg-gradient-to-r from-[#9B17D0] to-[#C53B08] p-[1px]">
              <div className="bg-transparent rounded-full">
                <Link
                  href={buttonLink}
                  className="bg-transparent text-white px-4 py-2 text-base rounded-full flex items-center justify-center font-semibold"
                >
                  {buttonText}
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
