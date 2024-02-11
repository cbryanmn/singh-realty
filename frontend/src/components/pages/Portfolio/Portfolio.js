import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio/Portfolio.css';
import { complexes } from './Data';

function Portfolio() {
    return (
        <div className="portfolio-page-container">
            <div className="portfolio-h1-container">
                <h1 className="portfolio-h1">Property Portfolio</h1>
            </div>
            <div className="properties-grid">
                {complexes.map(property => (
                    <div key={property.name} className="individual-property">
                        <Link to={`/properties/${encodeURIComponent(property.name)}`}>
                            <img src={property.img} alt={`${property.name}`} className="property-image" />
                        </Link>
                        <div className="property-info">
                            <div className="property-name">
                                <Link to={`/properties/${encodeURIComponent(property.name)}`} className="property-name-link">{property.name}</Link></div>
                            <div className="property-city">
                                <Link to={`/properties/${encodeURIComponent(property.name)}`} className="property-city-link">{property.city}</Link></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio
