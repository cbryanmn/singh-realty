import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaXmark } from 'react-icons/fa';
import '../AvailableProperties/ImageModal.css';

function ImageModal({ images, alts, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="image-modal">
            <div className="image-modal-content">
                <img src={images[currentIndex]} alt={alts[currentIndex]} className="image-modal-img" />
                <button onClick={handlePrev} className="chevron-left"><FaChevronLeft /></button>
                <button onClick={handleNext} className="chevron-right"><FaChevronRight /></button>
            </div>
            <p className="image-alt-text">{alts[currentIndex]}</p>
            <button onClick={onClose} className="x-mark">Close</button>
        </div>
    );
}

export default ImageModal
