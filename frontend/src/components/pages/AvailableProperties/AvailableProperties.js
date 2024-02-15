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
            <div className="search-results-list">
                <div className="sr-box">
                    <div className="sr-left-div">
                        <div className="search-result-img">
                            <img src={currentImg} alt={property.alt} onClick={() => setIsModalOpen(true)} />
                        </div>
                        <div className="more-imgs">
                            <div className="more-imgs-row">
                                {allImages.map((imgUrl, index) => (
                                    <div key={index} className={`more-imgs-${index}`}>
                                        <img
                                            src={imgUrl}
                                            alt={`Image ${index}`}
                                            onClick={() => handleImageClick(imgUrl, index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="sr-right-div">
                        {property.unitType === 'apartment' && <div className="sr-right-top">
                            <p className="sr-pn">{property.name}</p>
                        </div>}
                        <div className="sr-right-bottom">
                            <div className="sr-rl-div">
                                <div className="sr-info">
                                    <p className="sr-p-b">Address:</p>
                                    <p className="sr-p">{property.address}</p>
                                    <p className="sr-p">{property.citystatezip}</p>
                                </div>
                                {property.unitType === 'apartment' && <div className="sr-info">
                                    <p className="sr-p-b">Unit Number: {property.unit}</p>
                                </div>}
                                <div className="sr-info">
                                    <p className="sr-p-b">MLS Number:</p>
                                    <p className="sr-p">{property.mls}</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Available On:</p>
                                    <p className="sr-p">{formatDate(property.availableOn)}</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Contact:</p>
                                    <p className="sr-p">{property.mgr}</p>
                                    <p className="sr-p">Phone: {property.phone}</p>
                                    <p className="sr-p">Email: {property.email}</p>
                                </div>
                            </div>
                            <div className="sr-rr-div">
                                <div className="sr-info">
                                    <p className="sr-p-b">Unit Type:</p>
                                    <p className="sr-p">
                                        {property.bedrooms} Bed / {property.bathrooms} Bath</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Square Feet:</p><p className="sr-p">{property.sqft.toLocaleString()}</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Monthly Rent:</p>
                                    <p className="sr-p">{formatCurrency(property.rent)}</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Security Deposit:</p>
                                    <p className="sr-p">{formatCurrency(property.deposit)}</p>
                                </div>
                                <div className="sr-info">
                                    <p className="sr-p-b">Amenities:</p>
                                    <p className="sr-p sr-p-wrap">{property.amenities.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="sr-image-modal">
                        <ImageModal
                            images={allImages}
                            alts={alts}
                            initialIndex={modalImageIndex}
                            onClose={() => setIsModalOpen(false)}
                        /></div>
                )}
            </div>
        );
    }

    const renderProperties = (propertiesList) => {
        return propertiesList.map((property, index) => (
            <PropertyItem key={index} property={property} />
        ));
    };

    const clearSearch = () => {
        setSelectedBedrooms('');
        setSelectedBathrooms('');
        setSelectedUnitType('');
        setSelectedZipCode('');
        setSelectedGroundFloor('');
        setSelectedMinRent('');
        setSelectedMaxRent('');
        setSelectedMinSqft('');
        setSelectedMaxSqft('');
        setSearchPerformed(false);
    };

    return (
        <div className="ap-main-container">
            <h1 className="ap-h1">Available Properties</h1>
            <div className="ap-search-container">
                <p class="search-ap">Search Available Properties</p>
                <div className="sf-top-row">
                    <div className="sf-ut"><label>Unit Type:</label>
                        <select value={selectedUnitType} onChange={(e) => setSelectedUnitType(e.target.value)} style={{ width: '130px', height: '30px' }}>
                            <option value="">Any</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                        </select></div>

                    <div className="sf-bed">
                        <label>Bedrooms: </label>
                        <select value={selectedBedrooms} onChange={(e) => setSelectedBedrooms(e.target.value)} style={{ width: '130px', height: '30px' }}>
                            <option value="">Any</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                        </select></div>

                    <div className="sf-bath">
                        <label>Bathrooms: </label>
                        <select value={selectedBathrooms} onChange={(e) => setSelectedBathrooms(e.target.value)} style={{ width: '130px', height: '30px' }}>
                            <option value="">Any</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></div>

                    <div className="sf-gf">
                        <label>Ground Floor:</label>
                        <select value={selectedGroundFloor} onChange={(e) => setSelectedGroundFloor(e.target.value)} style={{ width: '130px', height: '30px' }}>
                            <option value="">Any</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>

                <div className="sf-2nd-row">
                    <div className="sf-am-t">
                        <label>Amenities: </label>
                    </div>
                    <div className="sf-am-i">
                        <div className="sf-am-i-row-top">
                            <label className="checkbox-label">
                                <input type="checkbox" value="Secure Entry" /> Secure Entry
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" value="Swimming Pool" /> Swimming Pool
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" value="In-Unit W/D" /> In-Unit W/D
                            </label>
                        </div>
                        {(selectedUnitType === 'apartment' || selectedUnitType === '') && (
                            <div className="sf-am-i-row-bottom">
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Picnic Area" /> Picnic Area
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Fitness Center" /> Fitness Center
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Heated Parking Garage" /> Heated Parking Garage
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Playground" /> Playground
                                </label>
                            </div>
                        )}
                        {(selectedUnitType === 'house' || selectedUnitType === '') && (
                            <div className="sf-am-i-row-bottom-if-h-or-a">
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Finished Basement" /> Finished Basement
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Walkout Basement" /> Walkout Basement
                                </label>
                                <label className="checkbox-label">
                                    <input type="checkbox" value="Heated Parking Garage" /> Heated Parking Garage
                                </label>
                            </div>
                        )}
                    </div>
                </div>

                <div className="sf-rent-sqft-container">
                    <div className="sf-rent-container">
                        <div className="label">Rent:</div>
                        <div className="input-group">
                            <label className="input-label">Min:
                                <input type="number" value={selectedMinRent} onChange={(e) => setSelectedMinRent(e.target.value)} style={{ width: '130px', height: '30px' }} />
                            </label>
                            <label className="input-label">Max:
                                <input type="number" value={selectedMaxRent} onChange={(e) => setSelectedMaxRent(e.target.value)} style={{ width: '130px', height: '30px' }} />
                            </label>
                        </div>
                    </div>

                    <div className="sf-sqft-container">
                        <div className="label">Square Feet:</div>
                        <div className="input-group">
                            <label className="input-label">Min:
                                <input type="number" value={selectedMinSqft} onChange={(e) => setSelectedMinSqft(e.target.value)} style={{ width: '130px', height: '30px' }} />
                            </label>
                            <label className="input-label">Max:
                                <input type="number" value={selectedMaxSqft} onChange={(e) => setSelectedMaxSqft(e.target.value)} style={{ width: '130px', height: '30px' }} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="sf-5th-row">
                    <div className="sf-zip">
                        <label>Zip Code: </label>
                        <input type="text" value={selectedZipCode} onChange={(e) => setSelectedZipCode(e.target.value)} style={{ width: '130px', height: '30px', marginLeft: '5px' }} />
                    </div>
                </div>

                <div className="sf-button-div">
                    <button onClick={handleSearch} className="sf-button">Search</button>
                </div>
                <div className="clear-search">
                    <button className="clear-search-button" onClick={clearSearch}>Clear Search</button>
                </div>
            </div>

            <div className="sr-list-div" key={searchKey}>
                {
                    searchPerformed ? (
                        searchResults.length > 0 ? renderProperties(searchResults) :
                            <div className="no-search-results">There are no search results to display.</div>
                    ) : (renderProperties(properties)
                    )}
            </div>
        </div>
    )
}

export default AvailableProperties
