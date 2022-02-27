import React, { useState } from "react";
import Places from "./Places";
export const List = (props) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(5);
  
  return (
    <div className="bg-grey-200 h-[90vh] overflow-scroll">
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
          Hotels, Restraunts & attractions near around
        </h3>
        <div className="relative inline-flex">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg>
          <select
            className="border mx-2 border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option
              className="border-0 bg-transparent border-b-2"
              value="restaurants"
            >
              Restaurants
            </option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>

        {/* For Rating */}
        <div className="relative inline-flex">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg>
          <select
            className="border mx-2 border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={5}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className="container my-3">
        {props.places?.map((place, i) => (
          <div className="list-item m-3" key={i}>
            <Places place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;
