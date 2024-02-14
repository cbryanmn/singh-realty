import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-outer-container">
            <div className="hero-background-container">
                <video autoPlay loop muted playsInline>
                    <source src="https://cbwebdevtesting.s3.us-east-2.amazonaws.com/houses-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hero-header">
                <div className="hero-header-h1-container">
                    <h1 className="hero-header-h1">Singh Realty Management</h1>
                </div>
                <div className="hero-header-p-container">
                    <p className="hero-header-p">Rated #1 in Minnesota</p>
                </div>
                <div className="hero-header-button-container">
                    <Link to='/availableproperties'>
                        <button className="hero-header-button">See Available Properties</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
