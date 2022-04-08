import React, {useEffect, useState, useContext} from "react";
import getPlaces from "../api";
import List from "./List";
import Map from "./Map";

import slugContext from "../context/slugContext";

export const Home = () => {
    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat:0, lng:0})
    const [bounds, setBounds] = useState({})
    const [isLoding, setIsLoding] = useState(false)
    const [type, setType] = useState("restaurants")
    const [rating, setRating] = useState(5)
    const {catPlace, category, slug} = useContext(slugContext);
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) =>
      {
          setCoordinates({lat:latitude, lng:longitude})
      }
      )
    }, [])
    
    useEffect(() => {
      const filteredPlaces = places?.filter((place)=>place.rating>  rating)
      setFilteredPlaces(filteredPlaces); 
    }, [rating])
    
    useEffect(() => {
      setCoordinates({ lat: category[slug]?.filter((place)=>place.name=== catPlace).lat , lng: category[slug]?.filter((place)=>place.name=== catPlace).lat });
      console.log(coordinates)
    }, [catPlace])
    

    useEffect(() => {
      setIsLoding(true)
      getPlaces(type, bounds.sw, bounds.ne).then((data) =>{
          setPlaces(data?.filter((place)=> place.name && place.num_reviews >0))
          setFilteredPlaces([])
          setIsLoding(false)
      })
    }, [type, coordinates, bounds],setTimeout(3000))
    
  return (
    <div>
      <div className="grid grid-cols-12 pt-2 gap-4 px-1">
        <div className="col-span-4 ">
          <List places = {filteredPlaces?.length ? filteredPlaces: places} isLoding={isLoding} type={type} setType={setType} rating={rating} setRating={setRating} />
        </div>
        <div className="col-span-8 border border-black ">
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}  />
        </div>
      </div>
    </div>
  );
};

export default Home;