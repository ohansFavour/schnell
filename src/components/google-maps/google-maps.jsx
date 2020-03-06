import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "./google.css";
const mapStyles = {
  width: "10%",
  height: "300px"
};
const GoogleMaps = props => {
  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: 6.684968, lng: 3.288546 }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      
    >
      <Marker position={{ lat: 6.684968, lng: 3.288546 }} />
    </Map>
 
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCkvTVYMG0eo-J2tmXVaTdLuI7rIhYXt_A"
})(GoogleMaps);
