import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css';
import WhySingh from '../WhySingh/WhySingh';

function Services() {
    return (
        <>
            <div className="services-outer-container">
                <div className="services-h1-container">
                    <h1 className="services-h1">
                        Services
                    </h1>
                </div>
                <div className="service-intro-container">
                    <p className="service-intro-p">
                        At Singh Realty, we're dedicated to enhancing the value and appeal of your real estate investments through our comprehensive property management solutions.
                    </p>
                    <p className="service-intro-p">
                        We emphasize building lasting relationships with our clients, centered on exceptional property care and professional management. Our team's meticulous attention to detail promises a streamlined and worry-free experience for each property owner.
                    </p>
                    <p className="service-intro-p">
                        A variety of service options are available, tailored to meet your needs.
                    </p>
                </div>
                <div className="service-div-container">
                    <div className="service-div1">
                        <div className="service-div-container-top">
                            <p className="service-title">
                                MLS Listing
                            </p>
                            <p className="service-pricing">
                                15% of One Month's Rent
                            </p>
                            <div className="services-list">
                                <p className="services-list-items">
                                    Listing on the Local MLS
                                </p>
                                <p className="services-list-items">
                                    Increased Visibility
                                </p>
                                <p className="services-list-items">
                                    Cross-Platform Reach
                                </p>
                                <p className="services-list-items">
                                    Tour Scheduling
                                </p>
                                <p className="services-list-items">
                                    Professional Photography
                                </p>
                                <p className="services-list-items">
                                    Professional Copywriting
                                </p>
                                <p className="services-list-items">
                                    Quality Customer Service
                                </p>
                            </div>
                        </div>
                        <div className="service-div-button-container">
                            <Link to="/intakeform" className="service-div-button">Get Started</Link>
                        </div>
                    </div>
                    <div className="service-div2">
                        <div className="service-div-container-top">
                            <p className="service-title">
                                Resident Placement
                            </p>
                            <p className="service-pricing">
                                85% of One Month's Rent
                            </p>
                            <div className="services-list">
                                <p className="services-list-items">
                                    Professional Marketing
                                </p>
                                <p className="services-list-items">
                                    Professional Photography
                                </p>
                                <p className="services-list-items">
                                    Cross-Platform Advertising
                                </p>
                                <p className="services-list-items">
                                    Tour Scheduling
                                </p>
                                <p className="services-list-items">
                                    Comprehensive Tenant Screening
                                </p>
                                <p className="services-list-items">
                                    Lease Preparation & Digital Signing
                                </p>
                                <p className="services-list-items">
                                    Quality Customer Service
                                </p>
                            </div>
                        </div>
                        <div className="service-div-button-container">
                            <Link to="/intakeform" className="service-div-button">Get Started</Link>
                        </div>
                    </div>
                    <div className="service-div3">
                        <div className="service-div-container-top">
                            <p className="service-title">
                                Full-Service Management
                            </p>
                            <p className="service-pricing">
                                10% of Monthly Rent
                            </p>
                            <p className="service-pricing2">
                                Leasing Fee $500
                            </p>
                            <p className="service-pricing3">
                                Lease Renewal Fee $250
                            </p>
                            <div className="services-list">
                                <p className="services-list-items">
                                    Everything in our other packages, plus:
                                </p>
                                <p className="services-list-items">
                                    Market Analysis and Property Evaluation
                                </p>
                                <p className="services-list-items">
                                    Property Management & Maintenance Teams
                                </p>
                                <p className="services-list-items">
                                    Client & Resident Portals
                                </p>
                                <p className="services-list-items">
                                    Financial Statements & Reporting
                                </p>
                                <p className="services-list-items">
                                    24/7 Emergency Maintenance
                                </p>
                                <p className="services-list-items">
                                    Property Turnover Services
                                </p>
                            </div>
                        </div>
                        <div className="service-div-button-container">
                            <Link to="/intakeform" className="service-div-button">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <WhySingh />
            <div className="click-button">
                <p className="click-button-p-1">
                    Click the button below to complete our client intake form.
                </p>
                <p className="click-button-p-2">
                    A member of our team will contact you within 24 hours.
                </p>
                <Link to="/intakeform" className="click-button-button">Get Started</Link>
            </div>
        </>
    )
}

export default Services
