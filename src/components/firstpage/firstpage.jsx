import React from "react";
import Carousel from "react-bootstrap/Carousel";

import StyledContainer from "../styled-components/styled-first-page";
import {numberToWord} from "../../custom-functions"

import "./firstpage.css";


class Firstpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      ...this.state,
      index: selectedIndex,
      direction: e.direction
    });
  };
  render() {
    const {index, direction} = this.state;
    return (
      <StyledContainer
        className={`landing-page-container `}
      >
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={9000}
          className= "schnell-content-container"
        >
          <Carousel.Item id="slide1">
            <div className="content1">
              {" "}
              <h1 className="schnell-header">Schnell</h1>
              <div className="schnell-content">
                Connect your things to the internet over schnell’s public
                LoRaWAN network.
                <br />
                We provide the infrastructure to support your solution, allowing
                you to focus more on your use case.
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item id="slide2">
            <div className="content2">
              <h1 className="schnell-header">Long Range</h1>
              <div className="schnell-content">
                Our single gateways can connect to your device up to 10km away.
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="slide3">
            <div className="content3">
              <h1 className="schnell-header">Affordable</h1>
              <div className="schnell-content">
                Spend less than a dollar to connect a single device in a month.
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="slide4">
            <div className="content4">
              <h1 className="schnell-header">Low Power</h1>
              <div className="schnell-content">
                Forget how to replace batteries with a guaranteed battery life
                of 2 years.
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="slide5">
            <div className="content5">
              <h1 className="schnell-header">{`Secure & Reliable`}</h1>
              <div className="schnell-content">
                Ensure your data is safe by using our end-to-end encryption. We
                also offer a 24/7 availability for our networks.
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </StyledContainer>
    );
  }
}

export default Firstpage;
