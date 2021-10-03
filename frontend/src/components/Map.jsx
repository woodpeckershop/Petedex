import React from 'react'
import GoogleMapReact from 'google-map-react';


function Map({latitude,longitude}) {


  const AnyReactComponent = ({ text }) => <div>{text}</div>;
console.log(typeof(latitude),longitude)

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 18
  };

  return (
     <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsBSvjsVw9hL42rs_fBuYUWGKclrg5nIM" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text="🐈🐈🐈"
        />
        {/* <cat lat={latitude}
          lng={longitude}/>
        <i class="fas fa-cat"></i> */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
