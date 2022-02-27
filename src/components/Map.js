import React from "react";
import GoogleMapReact from "google-map-react";
const MapsAPI = "AIzaSyBxvTeAFa69RjNoC8CsRfrkBDT6MSzjgPc";
export const Map = ({coordinates, setCoordinates, setBounds}) => {
  

  return (
    <div className="bg-blue-400 h-[90vh] w-full ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MapsAPI }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
