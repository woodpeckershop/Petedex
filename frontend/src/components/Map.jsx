import React from "react";
import GoogleMapReact from "google-map-react";
// import Marker from "google-map-react";
import {Marker} from "./Marker.js"

function Map({ latitude, longitude }) {
  function AnyReactComponent  ({ text }) {
    
    return (<div style={Marker}>{text}</div>);
  }
  console.log(typeof latitude, longitude);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 18,
  };

  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC1njAZKv9rJIrWCsVI9VZO2OP0RTpjh2I" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        
        <AnyReactComponent lat={latitude} lng={longitude} text="😺" /> 
       
        {/* <Marker className="marker"
          key="marker_1"
          position={{
            lat: latitude,
            lng: longitude,
          }}
          text="love"
        />
        {/* <cat lat={latitude}
          lng={longitude}/>
        <i class="fas fa-cat"></i> */}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
