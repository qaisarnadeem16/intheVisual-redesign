import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import man from '/public/assets/man.png'
import Image from 'next/image';

const ReviewCarousel = () => {
    const reviews = [
        {
            id: 1,
            text: '"It was great. Thank you Visual, hopefully we will have a chance to work again in the future."',
            rating: 5,
            image: man, // Replace with actual image path
            name: 'Linur Chubaev',
            title: 'Founder at Eloqnt',
        },
        {
            id: 2,
            text: '"Amazing service! Highly recommend Visual for any project needs."',
            rating: 4,
            image: man, // Replace with actual image path
            name: 'Jane Doe',
            title: 'CEO at Example Co.',
        },
        {
            id: 3,
            text: '"Excellent work and great communication. Will definitely collaborate again!"',
            rating: 5,
            image: man, // Replace with actual image path
            name: 'John Smith',
            title: 'Founder at TechStart',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // md and below
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // sm and below
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
                <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="md:text-6xl text-3xl max-w-xl mx-auto  font-bricola text-center  mb-8">Our partners
                    experiences with us</h2>
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                                <div className="flex items-center mb-4">
                                    {renderStars(review.rating)}
                                </div>
                                <div className="flex items-center">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <p className="text-gray-900 font-semibold">{review.name}</p>
                                        <p className="text-gray-600 text-sm">{review.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewCarousel;