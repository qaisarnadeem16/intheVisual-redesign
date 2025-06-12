import { stories } from '@/data/data';
import SuccessStory from '../shared/common/success-story-cards';


export default function SuccessStories() {
    return (
        <div className="py-12">
            <div className="text-center">
                <h1 className="text-5xl lg:text-6xl tracking-tight font-bricola font-normal">
                    Our Success Stories
                </h1>
                <p className="text-[#6A6A86] max-w-md py-6 mx-auto font-poppins text-sm md:text-base">
                    See how we've helped these businesses transform their online presence and achieve remarkable results.
                </p>
            </div>
            {stories.map((story, index) => (
                <SuccessStory
                    key={index}
                    title={story.title}
                    description={story.description}
                    imageSrc={story.imageSrc}
                    imageAlt={story.imageAlt}
                    buttonText="Click To View Full Case Study"
                    bgColor={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    imagePosition={index % 2 === 0 ? 'right' : 'left'}
                    slug={story.slug}
                />
            ))}
        </div>
    );
}