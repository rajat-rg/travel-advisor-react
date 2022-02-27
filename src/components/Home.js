import React, {useEffect, useState} from "react";
import getPlaces from "../api";
import List from "./List";
import Map from "./Map";

export const Home = () => {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat:0, lng:0})
    const [bounds, setBounds] = useState({})

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) =>
      {
          setCoordinates({lat:latitude, lng:longitude})
      }
      )
    }, [])
    

    useEffect(() => {
      getPlaces(bounds.sw, bounds.ne).then((data) =>{
          setPlaces(data)
      })
    }, [coordinates, bounds])
    
  return (
    <div>
      <div className="grid grid-cols-12 pt-2 gap-4 px-1">
        <div className="col-span-4 ">
          <List places = {places}/>
        </div>
        <div className="col-span-8 border border-black ">
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
        </div>
      </div>
    </div>
  );
};

export default Home;