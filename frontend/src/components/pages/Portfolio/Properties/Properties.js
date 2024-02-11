import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { complexes } from '../Data';
import '../Properties/Properties.css';
import { FaChevronLeft } from 'react-icons/fa';

const Properties = () => {
    const { propertyName } = useParams();
    const property = complexes.find(p => p.name === propertyName);

    if (!property) {
        return <div>Property not found</div>;
    }

    const imagePath = process.env.PUBLIC_URL + '/' + property.img;

    return (
        <>
            <Link to="/portfolio" className="back">
                <FaChevronLeft className="icon" /> Back to Portfolio
            </Link>
            <div className="property-container">
                <img src={imagePath} alt={property.alt} className="property-page-img" />
                <h1 className="property-page-h1">{property.name}</h1>
                <p className="property-address">{property.address}</p>
                <p className="property-addresscitystatezip">{property.addresscitystatezip}</p>
                <p className="property-description">{property.description}</p>
                <p className="managed-by">Managed By:</p>
                <p className="mgr">{property.mgr}</p>
                <p className="property-phone">Phone: {property.phone}</p>
            </div>
        </>
    )
}

export default Properties;
