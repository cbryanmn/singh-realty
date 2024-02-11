import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PropertyList() {
    const [searchResults, setSearchResults] = useState([]);
    const [properties, setProperties] = useState([]);

    const [selectedBedrooms, setSelectedBedrooms] = useState('');
    const [selectedBathrooms, setSelectedBathrooms] = useState('');
    const [selectedUnitType, setSelectedUnitType] = useState('');
    const [selectedZipCode, setSelectedZipCode] = useState('');
    const [selectedGroundFloor, setSelectedGroundFloor] = useState('');
    const [selectedMinRent, setSelectedMinRent] = useState('');
    const [selectedMaxRent, setSelectedMaxRent] = useState('');
    const [selectedMinSqft, setSelectedMinSqft] = useState('');
    const [selectedMaxSqft, setSelectedMaxSqft] = useState('');

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/properties');
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleSearch = async () => {
        try {
            const query = {};
            if (selectedBedrooms) query.bedrooms = selectedBedrooms;
            if (selectedBathrooms) query.bathrooms = selectedBathrooms;
            if (selectedUnitType) query.unitType = selectedUnitType;
            if (selectedZipCode) query.zipCode = selectedZipCode;
            if (selectedGroundFloor) query.groundFloor = selectedGroundFloor === 'true';
            if (selectedMinRent) query.minRent = selectedMinRent;
            if (selectedMaxRent) query.maxRent = selectedMaxRent;
            if (selectedMinSqft) query.minSqft = selectedMinSqft;
            if (selectedMaxSqft) query.maxSqft = selectedMaxSqft;

            const queryString = Object.keys(query)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                .join('&');

            const response = await axios.get(`http://localhost:3000/api/properties?${queryString}`);
            setSearchResults(response.data);
            setProperties([]);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const renderProperties = (propertiesList) => {
        return propertiesList.map((property, index) => (
            <li key={index}>
                <div><img src={property.img} alt={property.alt} /></div>
                {property.unitType === 'apartment' && <div>Name: {property.name}</div>}
                <div>Address: {property.address}, {property.citystatezip}</div>
                {property.unitType === 'apartment' && <div>Unit: {property.unit}</div>}
                <div>Bedrooms: {property.bedrooms}</div>
                <div>Bathrooms: {property.bathrooms}</div>
                <div>Square Feet: {property.sqft}</div>
                <div>Rent: {property.rent}</div>
                <div>Deposit: {property.deposit}</div>
                <div>
                    Amenities: {property.amenities.join(', ')}
                </div>
                <div>{property.description}</div>
            </li >
        ));
    };

    return (
        <div>
            <h2>Properties</h2>
            <div>
                <label>Unit Type:</label>
                <select value={selectedUnitType} onChange={(e) => setSelectedUnitType(e.target.value)}>
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                </select>

                <label>Bedrooms:</label>
                <select value={selectedBedrooms} onChange={(e) => setSelectedBedrooms(e.target.value)}>
                    <option value="">Any</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </select>

                <label>Bathrooms:</label>
                <select value={selectedBathrooms} onChange={(e) => setSelectedBathrooms(e.target.value)}>
                    <option value="">Any</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div>
                    <label>Ground Floor:</label>
                    <input
                        type="checkbox"
                        checked={selectedGroundFloor === 'true'}
                        onChange={(e) => setSelectedGroundFloor(e.target.checked ? 'true' : '')}
                    />
                </div>

                <div>
                    <label>Amenities:</label>
                    <label><input type="checkbox" value="Secure Entry" /> Secure Entry</label>
                    <label><input type="checkbox" value="Swimming Pool" /> Swimming Pool</label>
                    <label><input type="checkbox" value="In-Unit W/D" /> In-Unit W/D</label>
                </div>

                <label>Min Square Feet:</label>
                <input type="number" value={selectedMinSqft} onChange={(e) => setSelectedMinSqft(e.target.value)} />

                <label>Max Square Feet:</label>
                <input type="number" value={selectedMaxSqft} onChange={(e) => setSelectedMaxSqft(e.target.value)} />

                <label>Min Rent:</label>
                <input type="number" value={selectedMinRent} onChange={(e) => setSelectedMinRent(e.target.value)} />

                <label>Max Rent:</label>
                <input type="number" value={selectedMaxRent} onChange={(e) => setSelectedMaxRent(e.target.value)} />

                <label>Zip Code:</label>
                <input type="text" value={selectedZipCode} onChange={(e) => setSelectedZipCode(e.target.value)} />

                <button onClick={handleSearch}>Search</button>
            </div>

            <ul>
                {searchResults.length > 0 ? renderProperties(searchResults) : renderProperties(properties)}
            </ul>
        </div>
    )
}

export default PropertyList