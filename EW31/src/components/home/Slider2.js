import React , { useState, useEffect  } from "react";

import "/EW31/src/css/Slider.css";

const images = [
  '../assets/img/detail.png',
  '../assets/img/detail-2.png',
  '../assets/img/detail-3.png',
];

function Slider2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 自動で次のスライドに移動
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <button className="slider-btn left" onClick={handlePrev}>
        &#8249;
      </button>
      <div
        className={`slider-image-container ${
          isAnimating ? 'fade-animation' : ''
        }`}
      >
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="slider-image"
        />
      </div>
      <button className="slider-btn right" onClick={handleNext}>
        &#8250;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default Slider2;
