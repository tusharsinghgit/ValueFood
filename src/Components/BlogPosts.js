import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogPosts = () => {
    const staticPosts = [
        {
            id: 1,
            title: '12 Tips for Maintaining a Healthy Lifestyle',
            image: 'img/blog-1.jpg',
            snippet: 'Discover simple and effective tips to lead a healthier lifestyle...',
            url: 'https://www.healthline.com/health/how-to-maintain-a-healthy-lifestyle'
        },
        {
            id: 2,
            title: '10 Superfoods To Boost A Healthy Diet',
            image: 'img/blog-2.jpg',
            snippet: 'Learn about the top 5 superfoods and their benefits...',
            url: 'https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463'
        },
        {
            id: 3,
            title: 'How to Meal Prep for a Week',
            image: 'img/blog-11.jpg',
            snippet: 'A guide to meal prepping for a stress-free week...',
            url: 'https://thegirlonbloor.com/how-to-meal-prep-my-weekly-meal-prep-routine/'
        },
        {
            id: 4,
            title: 'Understanding Plant-Based Diets',
            image: 'img/blog-12.jpg',
            snippet: 'A comprehensive guide to starting and maintaining a plant-based diet...',
            url: 'https://www.healthline.com/nutrition/plant-based-diet-guide'
        },
        {
            id: 5,
            title: 'The Benefits of Regular Exercise',
            image: 'img/blog-6.jpg',
            snippet: 'Explore the physical and mental health benefits of regular exercise...',
            url: 'https://www.healthline.com/nutrition/10-benefits-of-exercise'
        },
        {
            id: 6,
            title: 'Healthy Snack Ideas for Kids',
            image: 'img/blog-9.jpg',
            snippet: 'Discover a variety of healthy snack options that kids will love...',
            url: 'https://www.healthline.com/nutrition/healthy-snacks-for-kids'
        },
        {
            id: 7,
            title: 'Mindfulness and Meditation for Stress Relief',
            image: 'img/blog-8.jpg',
            snippet: 'Learn how mindfulness and meditation can help reduce stress and improve well-being...',
            url: 'https://www.mindful.org/how-to-manage-stress-with-mindfulness-and-meditation/'
        },
        {
            id: 8,
            title: 'The Importance of Staying Hydrated',
            image: 'img/blog-13.jpg',
            snippet: 'Understand why hydration is crucial and how to ensure you stay hydrated...',
            url: 'https://www.ncoa.org/article/10-reasons-why-hydration-is-important'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards per line
        slidesToScroll: 1,
        rows: 2, // Number of rows
        slidesPerRow: 1 // Number of slides per row
    };

    return (
        <div className="container my-5">
            <h2 className="text-center">Food and Healthy Lifestyle Blog</h2>
            <Slider {...settings}>
                {staticPosts.map(post => (
                    <div key={post.id} className="p-3">
                        <div className="card blog-card">
                            <div className="card_image_blog">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="card_content_blog">
                                <h5 className="card_title_blog">{post.title}</h5>
                                <p className="card_text_blog">{post.snippet}</p>
                                <a href={post.url} className="btn btn-primary_blog">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogPosts;
