import '../App.css';
import { useState } from "react";

const RecipeCarouselS = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="recipe-carousel-container">
        <div className="slide_direction">
          <div className="left" onClick={handlePrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
        </div>
        <a href={`/recipe/${currentIndex}`} className="carousel-image-link">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            className="carousel-image"
            alt={`Recipe ${currentIndex}`}
          />
        </a>
        <div className="slide_direction">
          <div className="right" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>
        <div className="scroll">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    );
}

export default RecipeCarouselS;