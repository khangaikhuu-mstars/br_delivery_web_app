import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../img/banner-1.png";
import banner2 from "../img/banner-2.png";
import banner3 from "../img/banner-3.png";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
