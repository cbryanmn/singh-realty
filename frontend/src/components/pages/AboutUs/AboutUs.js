import React from 'react';
import '../AboutUs/AboutUs.css';
import TeamTable from '../Team/Team';

function AboutUs() {
    return (
        <>
            <div className="aboutus-outer-container">
                <div className="about-us-headline">
                    <h1 className="about-us-headline-h1">About Us</h1>
                </div>
                <div className="about-us-intro">
                    <p className="au-i-p-1">Singh Realty has been a cornerstone in the Twin Cities market for 11 years and counting. Founded by Rupi Kaur Singh, a licensed real estate broker with multifamily investment property experience spanning over 15 years, our firm originated from a simple yet fundamental observation: Rupi recognized the need among her investor clients for high-quality management services. These services needed to not only be knowledgeable about the local market, but also dedicated to offering comprehensive care including maintenance, timely financial reporting, and steadfast communication, all while ensuring tenant satisfaction.
                    </p>

                    <p className="au-i-p-2">Our ethos at Singh Realty is centered around delivering unparalleled property management services. We go beyond traditional management by providing detailed market insights, meticulous property upkeep, precise financial accounting, and a commitment to maintaining open and consistent lines of communication with our clients. Our focus is on creating a positive and supportive environment for tenants, which we believe is key to the success and profitability of our clients' investments. This tenant-first approach helps in fostering harmonious relationships, leading to sustained occupancy and returns.
                    </p>

                    <p className="au-i-p-3">The strength of Singh Realty lies in our expert team. We have carefully assembled a group of professionals excelling in marketing, management, administration, and maintenance. Each team member is dedicated to upholding our high standards and contributing their expertise to ensure the smooth operation and management of each property. Our aim is to make property ownership a hassle-free and rewarding experience for our clients, safeguarding their investments and optimizing their returns in the ever-evolving real estate landscape.
                    </p>
                </div>
                <TeamTable />
            </div>
        </>
    )
}

export default AboutUs
