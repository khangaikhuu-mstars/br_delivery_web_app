import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../img/banner-1.png";
import banner2 from "../img/banner-2.png";
import banner3 from "../img/banner-3.png";
import banner11 from "../img/banner-1-1.png";
import banner12 from "../img/banner-1-2.png";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <div>
            <img src={banner11} className="banner-1-1" />
            <img src={banner12} className="banner-1-2" />
            <h2 className="slider-h2 text-orange">MStars Food delivery</h2>
            <p className="slider-p">Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <h2 className="slider-h2">Сэт хоол тун удахгүй</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <h2 className="slider-h2">Тун удахгүй...</h2>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
