import React, { useState, useEffect } from "react";
import shirtImage3 from "../Pages/images/shirt-3.png";
import shirtImage4 from "../Pages/images/shirt-4.png";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./CSS/Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      src: shirtImage4,
      alt: "First slide",
      footer: false,
      NavLink: "/product",
      className: "slide_images",
    },
    {
      id: 2,
      src: shirtImage3,
      alt: "Second slide",
      footer: false,
      NavLink: "/product1",
      className: "slide_images",
    },
    {
      id: 3,
      src: shirtImage3,
      alt: "Third slide",
      footer: false,
      NavLink: "/product2",
      className: "slide_images",
    },
    {
      id: 4,
      src: shirtImage3,
      alt: "Fourth slide",
      footer: false,
      NavLink: "/product3",
      className: "slide_images",
    },
    {
      id: 5,
      src: shirtImage3,
      alt: "Fifth slide",
      footer: false,
      NavLink: "/product4",
      className: "slide_images",
    },
    { 
      id: 6, 
      footer: true 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        setTransitioning(nextIndex === 0);
        return nextIndex;
      });
    }, 2000);
  
    return () => clearInterval(interval);
  }, [slides.length]);
  

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  const [enlarged, setEnlarged] = useState(false);
  const toggleEnlarged = () => {
    setEnlarged(!enlarged);
  };

  return (
    <div className="slider-container">
      <ul className={`slides ${transitioning ? "transitioning" : ""}`}>
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            onTransitionEnd={handleTransitionEnd}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {slide.footer ? (
              <Footer />
            ) : (
              <Link to={slide.NavLink}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={enlarged ? "enlarged slide_images" : ""}
                  onClick={toggleEnlarged}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
