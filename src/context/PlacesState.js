import React, { useState } from "react";
import placesContext from "./placesContext"

const PlacesState = (props)=>{

    const [places, setPlaces] = useState([]);
    const getPlaces = async() =>{
      const response = await fetch("http://localhost:5000/api/places/fetchplaces",
      {method:"GET",
      headers: {
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem('token')
      },
    }
    );
    const json = await response.json();
    setPlaces(json)
  }
    return (<placesContext.Provider value={{places, getPlaces}}>
        {props.children}
    </placesContext.Provider>)
}

export default PlacesState;
