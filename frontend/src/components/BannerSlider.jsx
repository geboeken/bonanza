import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src="path_to_image1.jpg" alt="Event 1" />
        </div>
        <div>
          <img src="path_to_image2.jpg" alt="Event 2" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
