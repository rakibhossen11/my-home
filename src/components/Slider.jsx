import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// images
import image1 from '../assets/home1.jpg';
import image2 from '../assets/home2.jpg';
import image3 from '../assets/home3.jpg';

const Slider = () => {
  return (
    <div>
      <Carousel autoPlay={true}>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
