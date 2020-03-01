import React from "react";
import Slider from "react-slick";

import UseCase from "../../components/use-case/use-case";
import Header from "../../components/header/header";
import Precision from "../../accessories/precision-agriculture.jpg";
import HealthCare from "../../accessories/health-care.jpg";
import Smart from "../../accessories/smartmeter.jpg";
import Oil from "../../accessories/oil and gas.jpg";
import Asset from "../../accessories/asset-tracking.png"; 

import "./useCases.css";

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

const UseCasePage = ({user}) => {
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
    <div className="use-case-view">
      <Header user={user} />
      <div className="use-case-section">
      <div className="usecasecontainer">
        <Slider {...settings}>
          <UseCase title="Precision Agriculture" image={Precision} />
          <UseCase title={`Oil & Gas`} image={Oil}/>
          <UseCase title={`Asset Tracking & logistics`} image={Asset}/>
          <UseCase title="Health Care" image={HealthCare} />
          <UseCase title="Smart Metering" image={Smart} />
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default UseCasePage;
