import React, { useState } from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import axios from 'axios';
import FooterFormSuccess from './FooterFormSuccess';

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        if (!formData.name ||
            !formData.phone ||
            !formData.email) {
            alert("Please fill in all form fields.");
            return;
        }

        try {
            const response = await axios.post(`https://singh-realty-backend-168deb75ac7a.herokuapp.com/api/footer-contact`, formData);
            console.log('Form submitted successfully', response.data);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error);
            setIsSubmitted(true);
        }
    };

    return (
        <div className='footer-container'>
            <section className='footer-contact'>
                <p className='footer-contact-heading'>
                    Interested? Request a consultation with a portfolio manager.
                </p>
                <div className='input-areas'>
                    {isSubmitted ? (
                        <FooterFormSuccess />
                    ) : (
                        <>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className='footer-input'
                                    name='name'
                                    type='text'
                                    id='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Your Name'
                                    required
                                />
                                <input
                                    className='footer-input'
                                    name='phone'
                                    type='text'
                                    id='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Phone Number'
                                    required
                                />
                                <input
                                    className='footer-input'
                                    name='email'
                                    type='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email Address'
                                    required
                                />
                                <Button buttonStyle='btn--outline' type='submit'>Contact Us</Button>
                            </form>
                        </>
                    )}
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className="footer-link-h2">About Us</h2>
                        <Link to='/services'>Services</Link>
                        <Link to='/testimonials'>Testimonials</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                        <Link to='/availableproperties'>Available Properties</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className="footer-link-h2">Resources</h2>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/'>Client Login</Link>
                        <Link to='/'>Maintenance Portal</Link>
                        <Link to='/'>Resident Login</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link'
                        to='//www.facebook.com/nationalparkservice'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        className='social-icon-link'
                        to='//www.instagram.com/nationalparkservice'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        className='social-icon-link'
                        to={
                            '//www.youtube.com/@NationalParkService'
                        }
                        target='_blank'
                        aria-label='YouTube'
                    >
                        <FaYoutube />
                    </Link>
                    <Link
                        className='social-icon-link'
                        to='//twitter.com/natlparkservice'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <FaTwitter />
                    </Link>
                    <Link
                        className='social-icon-link'
                        to='//www.linkedin.com/company/national-park-service'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </section>
            <div className="small-website-rights">
                <small className='website-rights'>© 2024 Singh Realty, Inc.</small>
            </div>
        </div>
    )
}

export default Footer
