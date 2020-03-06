import React from "react";
import Slider from "react-slick";

import Header from "../../components/header/header";
import UseImage from "../../accessories/useImage.svg";
import UseCase from "../../components/use-case/use-case.jsx";
import UseCaseInvert from "../../components/use-case/use-case-invert.jsx";
import Precision from "../../accessories/precision-agriculture.jpg";
import HealthCare from "../../accessories/health-care.jpg";
import Smart from "../../accessories/smartmeter.jpg";
import Oil from "../../accessories/oil and gas.jpg";
import Asset from "../../accessories/asset-tracking.png";

import "./useCases.css";

const UseCasePage = ({ user }) => {
  return (
    <div className="use-case-view">
      <div className="section1-container">
        <div className="header__bg"></div>
        <div className="use-contain">
          <div className="section1-content">
            <div className="content-main">
              <h2>
                We provide a set of tools and network to build your next IoT
                application at low cost
              </h2>
            </div>
            <div className="content-image">
              <img className="content-img" src={UseImage} />
            </div>
          </div>
        </div>
      </div>

      <div className="section2-use-case">
        <UseCaseInvert title="Precision Agriculture" image={Precision}>
          The global population is expected to grow by 70% by 2050, putting
          ever-increasing pressure on agriculture to feed the world. At the same
          time, land and water shortages, changing consumer patterns and a
          global trend towards the conservation of natural environmental
          resources, such as soil quality, add to the burden of balancing
          different demands on farmers.
          <br />
          <br />
          Until now, the implementation of automated monitoring and control
          systems has been restricted by weak cellular network coverage in many
          highly productive but sparsely populated rural areas. Schnell's
          network now enables the identification, monitoring and control over a
          very long distance (over 15 km) of a wide range of key agricultural
          data: soil temperature and moisture; environment, rainfall and water
          quality; air pollution; crop growth; livestock location, condition and
          feed levels; smartly connected harvesters and irrigation equipment;
          fire, theft and flood detection.
        </UseCaseInvert>
        <UseCase title="Health Care" image={HealthCare}>
          IoT devices consisting of LoRa-based sensors and gateways have proven
          to be a highly efficient means of tracking high-risk patients or
          systems around the clock, ensuring that health and medical safety is
          given the priority they need. The LoRaWAN Protocol connects millions
          of devices via cloud-based networks to help create smart homes, smart
          buildings and smart cities, but technology has now been adopted to
          improve the lives of those in society who need the highest level of
          personalized and seamless support.
          <br />
          <br /> LoRa technology also reduces up-front infrastructure costs as
          well as operational and end-node overheads. As a result, its
          technologies are starting to reap major practical benefits in the
          scientific and healthcare sectors.
        </UseCase>

        <UseCaseInvert title="Smart Metering" image={Smart}>
          Traditional utility operations are labor intensive and utilize
          subjective measurement by field personnel. Additionally, meters are
          often located in dense urban environments, indoors or even
          underground, which can be difficult or impossible to reach by many
          wireless technologies.
          <br />
          <br /> By implementing a smart utilities infrastructure comprised of
          sensors and gateways utilizing LoRa® devices and the LoRaWAN®
          protocol, utility and metering companies can collect data remotely and
          use personnel more efficiently to streamline operations.
        </UseCaseInvert>

        <UseCase title={"Oil & Gas"} image={Oil}>
          Oil & gas field is characterized by remote and inaccessible facilities
          where wireless connectivity is typically the only viable option for
          data transfer. Enterprises need to ensure the continuous running of
          vital equipment, no matter how far they are located.
          <br /> <br /> LoRaWAN technology can be used to create LoRaWAN
          networks in remote oil fields with the benefit of low power
          consumption, low cost and large signal coverage.
        </UseCase>
        <UseCaseInvert title={"Asset Tracking & Logistics"} image={Asset}>
          {" "}
          Inventory position and product integrity are important factors in the
          forecasted growth of the logistics industry, with an increasing focus
          on the production of inventory information from your asset report
          data. End-users can analyze data to identify process bottlenecks,
          determine the most efficient routes, locate properties, and use
          real-time tracking to detect risks to product integrity such as
          elevated temperature and humidity.<br/><br/> LoRa Systems and Wireless Radio
          Frequency Technology (LoRa Technology) help build asset knowledge with
          its long-range, low-power capability, all at a low cost.
        </UseCaseInvert>
      </div>
      <Header user={user} />
    </div>
  );
};

export default UseCasePage;
