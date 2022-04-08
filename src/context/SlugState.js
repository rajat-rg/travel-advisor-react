import React, { useState} from "react";
import slugContext from "./slugContext";

const SlugState = (props) => {
  const category = {
    sight: [
      { lat: 0.0, lng: 0.0, name: "agra" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "sanchi" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kolkata" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kanyakumari" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    family: [
      { lat: 0, lng: 0, name: "kedarnath" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "vaishnodevi" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "varanasi" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "prayagraj" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "konark" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "chennai" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    urban: [
      { lat: 0, lng: 0, name: "mumbai" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "chandigarh" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "bangalore" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "hydrabad" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "gurugram" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    budget: [
      { lat: 0, lng: 0, name: "kasol" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "pondicherry" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "goa" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "nainital" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    art: [
      { lat: 0, lng: 0, name: "manipur" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "assam" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kashmir" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "agra" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "jaipur" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    hills: [
      { lat: 0, lng: 0, name: "srinagar" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "manali" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kasol" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "sikkim" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "gulmarg" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    beach: [
      { lat: 0, lng: 0, name: "goa" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "vishakapatnam" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "bhubneshwar" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "andaman" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    adventure: [
      { lat: 0, lng: 0, name: "ajantacaves" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kariranga" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "jimcorbet" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "sundarban" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
    history: [
      { lat: 0, lng: 0, name: "nalanda" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "delhi" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "agra" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { lat: 0, lng: 0, name: "kolkata" , img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
    ],
  };
  
  const [slug, setSlug] = useState("");
  const update = (slugg) => {
    setSlug(slugg);
  };

  const [catPlace, setCatPlace] = useState("");
  const updateCatPlace = (place)=>{
    setCatPlace(place)
  }
  return (
    <slugContext.Provider value={{ slug, update, category, catPlace, updateCatPlace }}>
      {props.children}
    </slugContext.Provider>
  );
};

export default SlugState;
