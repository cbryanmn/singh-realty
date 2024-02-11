import React, { useState, useEffect } from 'react';
import { reviews } from './Data';
import { FaStar } from 'react-icons/fa';
import '../Testimonials/Testimonials.css';

function Testimonials() {
    const [displayedReviews, setDisplayedReviews] = useState(reviews);

    useEffect(() => {
        const handleResize = () => {
            const numberOfReviewsToShow = window.innerWidth > 768 ? 10 : 5;
            setDisplayedReviews(reviews.slice(0, numberOfReviewsToShow));
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="testimonials-headline">
                <h1 className="testimonials-healine-h1">Testimonials</h1>
            </div>
            <div className="testimonials-intro">
                <p className="intro-blurb">
                    At Singh Realty, we pride ourselves on the quality of our services and the satisfaction of our clients.
                </p>
                <p className="intro-blurb2">
                    Below are genuine reviews from both property owners and tenants, showcasing their experiences with our team. From exceptional property management to prompt maintenance resolutions, these testimonials reflect our commitment to excellence.
                </p>
                <p className="intro-blurb3">
                    Read on to discover why Singh Realty is the trusted choice for property management solutions:
                </p>
            </div>
            <div className="display-reviews">
                {displayedReviews.map(review => (
                    <div key={review.name} className="review-container">
                        <span className="name">{review.name}</span>
                        <span className="comma">, </span>
                        <span className="type">{review.type}</span>
                        <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <div className="review">{review.review}</div>
                    </div>
                ))}
            </div>
            <div className="testimonials-click-button">
                <p className="testimonials-click-button-p-1">
                    Click the button below to complete our client intake form.
                </p>
                <p className="testimonials-click-button-p-2">
                    A member of our team will contact you within 24 hours.
                </p>
                <button className="testimonials-click-button-button">Get Started</button>
            </div>
        </>
    );
}

export default Testimonials;
