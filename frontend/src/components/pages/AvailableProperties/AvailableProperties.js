import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import '../AvailableProperties/AvailableProperties.css';
import ImageModal from './ImageModal';
import { propertiesData } from './AvailablePropertiesData';

function AvailableProperties() {
    const [searchResults, setSearchResults] = useState([]);
    // const [properties, setProperties] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [searchKey, setSearchKey] = useState(0);

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
        setSearchResults(propertiesData);
    }, []);

    // const fetchProperties = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/properties');
    //         const propertiesWithCurrentImg = response.data.map(property => ({
    //             ...property,
    //             currentImg: property.img
    //         }));
    //         setProperties(propertiesWithCurrentImg);
    //     } catch (error) {
    //         console.error('Error fetching data: ', error);
    //     }
    // };

    const handleImageClick = (property, imgUrl) => {
        setProperties(prevProperties =>
            prevProperties.map(p =>
                p.id === property.id ? { ...p, currentImg: imgUrl } : p
            )
        );
    };

    const isEqual = (array1, array2) => {
        return JSON.stringify(array1) === JSON.stringify(array2);
    };

    const handleSearch = () => {

        const filtered = propertiesData.filter(property => {

            let matches = true;

            if (selectedBedrooms) query.bedrooms = selectedBedrooms;
            if (selectedBathrooms) query.bathrooms = selectedBathrooms;
            if (selectedUnitType) query.unitType = selectedUnitType;
            if (selectedZipCode) query.zipCode = selectedZipCode;
            if (selectedGroundFloor) query.groundFloor = selectedGroundFloor === 'true';
            if (selectedMinRent) query.minRent = selectedMinRent;
            if (selectedMaxRent) query.maxRent = selectedMaxRent;
            if (selectedMinSqft) query.minSqft = selectedMinSqft;
            if (selectedMaxSqft) query.maxSqft = selectedMaxSqft;

            return matches;
        });

        setSearchResults(filtered);

    };

    function PropertyItem({ property }) {
        const formatCurrency = (value) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(value);
        };

        const formatDate = (dateString) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        };

        const [currentImg, setCurrentImg] = useState(property.img);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalImageIndex, setModalImageIndex] = useState(0);


        const handleImageClick = (imgUrl, index) => {
            setCurrentImg(imgUrl);
            setModalImageIndex(index);
            setIsModalOpen(true);
        };

        const allImages = [property.img, ...property.moreImgs];

        const alts = [property.alt, ...property.moreImgsAlt];

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
                    ) : (renderProperties(propertiesData)
                    )}
            </div>
        </div>
    )
}

export default AvailableProperties
