import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_API_KEY = 'AIzaSyDoG5Ft8Qeds6HcBAtwXQXxpofejnvEdzM';
const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=" + GOOGLE_API_KEY;

const Map = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    googleMapURL={googleMapURL}
  />
));

const MapContainer = (props) => (
  <Map
    containerElement={
      <div style={{ 
        width: '100%',
        display: 'flex',
        flexGrow: 1 
      }} />
    }
    mapElement={
      <div style={{ width: '100%' }} />
    } 
  />
);

export default MapContainer;