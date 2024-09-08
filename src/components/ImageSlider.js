import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import img1 from "./img/is1.jpg";
import img2 from "./img/is2.jpg";
import img3 from "./img/is3.jpg";
import img4 from "./img/is4.jpg";
import img5 from "./img/is5.jpg";
import img6 from "./img/is6.jpg";
const images = [
    img1,
    img2,
    img3,
    img4, 
    img5,
    img6
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider-container">
            {images.map((image, index) => (
                <div
                    className={`slide ${index === currentIndex ? "active" : ""}`}
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}

            {/* Navigation dots */}
            <div className="navigation-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
