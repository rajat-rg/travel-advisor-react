import React from "react";
import GoogleMapReact from "google-map-react";
const MapsAPI = "AIzaSyBxvTeAFa69RjNoC8CsRfrkBDT6MSzjgPc"
export const Map = () => {
    const coordinates = {
        defaultCenter: {
          lat: 28.7,
          lng: 77.1
        },
        center:{
            lat: 0,
          lng: 0

        }
      };
    
  return (
    <div className="bg-blue-400 h-screen w-full ">
     
      <GoogleMapReact
      bootstrapURLKeys={{ key: MapsAPI }}
      defaultCenter={coordinates.defaultCenter}
      center={coordinates.defaultCenter}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options = {''}
      onClick={''}
      onChildClick={''} >
          
    </GoogleMapReact>
    </div>
  );
};

export default Map;
