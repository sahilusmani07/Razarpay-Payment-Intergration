import React from "react";
import Slider from "react-slick";
import "../public/SliderComponent.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="image-slide">
          <img src="https://www.avvatarindia.com/images/banners/20764621161742202630.jpg" alt="Slide 1" />
        </div>
        <div className="image-slide">
          <img     src="https://www.avvatarindia.com/images/banners/5669346991736154896.jpg" alt="Slide 2" />
        </div>
        <div className="image-slide">
          <img  src="https://www.avvatarindia.com/images/banners/10452951711746534964.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
