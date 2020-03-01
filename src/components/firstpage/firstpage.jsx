import React from "react";
import Slider from "react-slick";

import Schnell from "../schnell/schnell.component";
import LongRange from "../long-range/long-range";
import LowPower from "../low-power/low-power";
import Affordable from "../affordable/affordable";
import Secure from "../secure/secure";

import "./firstpage.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Firstpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="firstpagecontainer">
      <Slider {...settings}>
        <Schnell />
        <LongRange />
        <LowPower />
        <Affordable />
        <Secure />
      </Slider>
    </div>
  );
};

export default Firstpage;
