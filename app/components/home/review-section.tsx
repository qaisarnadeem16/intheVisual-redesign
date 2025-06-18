import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import printlogo from '/public/assets/testimonial/printlogo.png';
import menlogo from '/public/assets/testimonial/menlogo.jpeg';
import prolevlogo from '/public/assets/testimonial/prolevlogo.jpg';
import Section from '../shared/common/section';

const ReviewCarousel = () => {
    const reviews = [
        {
            id: 1,
            text: "Appreciate the follow-up. Working with you has been great, and the models look fantastic. We'll launch with our current product and plan to add more in Q1 2024. Will be in touch for further support.",
            rating: 5,
            image: printlogo,
            name: 'Denis Law',
            url: 'www.printandpack.com',
            title: '',
        },
        {
            id: 2,
            text: "I am very pleased with the fantastic work you have produced, as well as the professionalism and ease of the entire process. I am confident that you will be my go-to designer for any future projects.",
            rating: 5,
            image: menlogo,
            name: 'Cutis Levis',
            title: '',
            url: '',
        },
        {
            id: 3,
            text: "Thank you and your team for your hard work on this project. Your effort and dedication are greatly appreciated, especially given the challenges you faced.",
            rating: 5,
            image: prolevlogo,
            url: 'www.prolevelwear.com',
            name: 'Cipy Garcia',
            title: '',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const renderStars = (rating: any) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}
                    aria-hidden="true"
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="py-10 overflow-hidden bg-gray-100">
            <Section>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="md:text-6xl text-3xl max-w-xl mx-auto font-bricola text-center mb-8">
                        Our Clients Experiences with Us
                    </h2>
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review.id} className="p-4">
                                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto h-[270px] flex flex-col justify-between">
                                    <p className="text-gray-700 mb-4 italic flex-grow">"{review.text}"</p>
                                    <div className="flex items-center mb-4">
                                        {renderStars(review.rating)}
                                    </div>
                                    <div className="flex items-center">
                                        <Image
                                            src={review.image}
                                            alt={`${review.name}'s profile`}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="text-gray-900 font-semibold">{review.name}</p>
                                            {review.title && (
                                                <p className="text-gray-600 text-sm">{review.title}</p>
                                            )}
                                            {review.url && (
                                                <a
                                                    href={`https://${review.url}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 text-sm hover:underline"
                                                    aria-label={`Visit ${review.name}'s website`}
                                                >
                                                    {review.url}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Section>
        </div>
    );
};

export default ReviewCarousel;