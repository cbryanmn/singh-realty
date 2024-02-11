import React from 'react'
import './FooterFormSuccess.css';
import { Link } from 'react-router-dom';

function FooterFormSuccess() {
    return (
        <div className="submission-success-message">
            <p className="ssm-p1">Thank you for submitting the form.</p>
            <p className="ssm-p2">A member of our team will be in touch within 1 business day.</p>
            <div className="return-home-button-container">
                <Link to="/" className="footer-return-home-button">Return Home</Link>
            </div>
        </div>
    )
}

export default FooterFormSuccess
