import React, { useState } from 'react';
import axios from 'axios';
import '../IntakeForm/IntakeForm.css';
import { Link } from 'react-router-dom';

function IntakeForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        contactMethod: '',
        propertyName: '',
        propertyAddress: '',
        propertyDetails: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        if (!formData.name ||
            (formData.contactMethod === 'phone' && !formData.phone) ||
            (formData.contactMethod === 'email' && !formData.email)) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await axios.post(`https://singh-realty-backend-168deb75ac7a.herokuapp.com/api/contact`, formData);
            console.log('Form submitted successfully', response.data);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error);
            setIsSubmitted(true);
        }
    };

    return (
        <div className="intake-form-page-container">
            <h1 className="intake-form-h1">Client Intake Form</h1>
            <div className="main-form-container">
                {isSubmitted ? (
                    <div className="submission-success-message">
                        <p className="ssm-p1">Thank you for submitting the intake form.</p>
                        <p className="ssm-p2">A member of our team will be in touch within 1 business day.</p>
                        <div className="return-home-button-container">
                            <Link to="/" className="return-home-button">Return Home</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="asterisk-means"><span className="required-label">*</span> = Required Field</div>
                        <form onSubmit={handleSubmit}>
                            <div className="intake-form-input">
                                <div className="label-input-wrapper">
                                    <label
                                        htmlFor="name" className="intake-form-label">Name:<span className="required-label">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="intake-form-input-field-sm"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required />
                                </div>
                            </div>

                            <div className="intake-form-input">
                                <div className="label-input-wrapper">
                                    <label htmlFor="phone" className="intake-form-label">Phone Number:{formData.contactMethod === 'phone' && <span className="required-label">*</span>}</label>
                                    <input
                                        type="tel"
                                        id="phone" name="phone"
                                        className="intake-form-input-field-sm"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone"
                                        required={formData.contactMethod === 'phone'} />
                                </div>
                            </div>

                            <div className="intake-form-input">
                                <div className="label-input-wrapper">
                                    <label htmlFor="email" className="intake-form-label">Email Address:{formData.contactMethod === 'email' && <span className="required-label">*</span>}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="intake-form-input-field-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required={formData.contactMethod === 'email'} />
                                </div>
                            </div>

                            <div className="intake-form-input">
                                <div className="label-input-wrapper">
                                    <label className="intake-form-label intake-form-label-spacing">Preferred Method of Contact:<span className="required-label">*</span></label>
                                    <div>
                                        <label className="intake-form-radio">
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                className="intake-form-radio-button"
                                                value="email"
                                                checked={formData.contactMethod === 'email'}
                                                onChange={handleChange}
                                                required
                                            />
                                            Email
                                        </label>
                                        <label className="intake-form-radio">
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                className="intake-form-radio-button"
                                                value="phone"
                                                checked={formData.contactMethod === 'phone'}
                                                onChange={handleChange}
                                                required
                                            />
                                            Phone
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="intake-form-input"><div className="label-input-wrapper">
                                <label htmlFor="propertyName" className="intake-form-label">What is the name of your property? Please list all properties you are seeking service for.</label>
                                <textarea
                                    id="propertyName"
                                    name="propertyName"
                                    className="intake-form-input-field-lg"
                                    value={formData.propertyName}
                                    onChange={handleChange}
                                    placeholder="Property Name(s)"
                                />
                            </div>
                            </div>

                            <div className="intake-form-input"><div className="label-input-wrapper">
                                <label htmlFor="propertyAddress" className="intake-form-label">What is the property address? Please list all properties you are seeking service for.</label>
                                <textarea
                                    id="propertyAddress"
                                    name="propertyAddress"
                                    className="intake-form-input-field-lg"
                                    value={formData.propertyAddress}
                                    onChange={handleChange}
                                    placeholder="Property Address(es)"
                                />
                            </div>
                            </div>

                            <div className="intake-form-input"><div className="label-input-wrapper">
                                <label htmlFor="propertyDetails" className="intake-form-label">Please tell us a little bit about your property and any particular needs or concerns that you have.</label>
                                <textarea
                                    id="propertyDetails"
                                    name="propertyDetails"
                                    className="intake-form-input-field-lg"
                                    value={formData.propertyDetails}
                                    onChange={handleChange}
                                    placeholder="Your Property Details"
                                />
                            </div></div>

                            <div className="intake-form-button-container">
                                <button type="submit" className="intake-form-submit-button">Submit</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default IntakeForm;
