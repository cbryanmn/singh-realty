import React from 'react';
import { Link } from 'react-router-dom';
import '../Contact/Contact.css';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

function Contact() {
    const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.2576014695433!2d-93.27200022381308!3d44.97907787107013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3329afc95146b%3A0x1b85f2082450d511!2s55%20S%204th%20St%2C%20Minneapolis%2C%20MN%2055401!5e0!3m2!1sen!2sus!4v1704594623032!5m2!1sen!2sus`;

    return (
        <div className="container-everything">
            <div className="contact-headline">
                <h1 className="contact-headline-h1">Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="map-container">
                    <iframe
                        className="google-map-frame"
                        src={googleMapSrc}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="business-contact-info-container">
                    <div className="business-name">
                        Singh Realty
                    </div>
                    <div className="business-address">
                        <p>550 S 4th Street, Suite 200-A</p>
                        <p>Minneapolis, MN 55415</p>
                    </div>
                    <div className="business-phone">
                        <p>Phone: (612) 555-5550</p>
                    </div>
                    <div className="business-fax">
                        <p>Fax: (612) 555-5514</p>
                    </div>
                    <div className="business-email">
                        <div className="business-email-text">Email Address:</div>
                        <p>info@singhrealty.com</p>
                    </div>
                    <div className="business-social-media">
                        <div className="find-us-on-social-media"><p>Find us on social media:</p></div>
                        <Link
                            className='social-icon-link'
                            to='//www.facebook.com/nationalparkservice'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook className="contact-social-icon" />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.instagram.com/nationalparkservice'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram className="contact-social-icon" />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.youtube.com/@NationalParkService'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube className="contact-social-icon" />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//twitter.com/natlparkservice'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter className="contact-social-icon" />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.linkedin.com/company/national-park-service'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin className="contact-social-icon" />
                        </Link>
                    </div>
                    <div className="business-hours">
                        <div className="business-hours-text">Business Hours:</div>
                        <p>Mon-Sat 8:30 AM to 6:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
