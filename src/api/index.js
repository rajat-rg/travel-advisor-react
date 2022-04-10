import axios from "axios";

export const getPlaces = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        method: "GET",

        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "d9a9e9776bmsh81b21eaa5580c93p1ae022jsn20354001224d",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getWeather = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/weather",
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key":
            "d9a9e9776bmsh81b21eaa5580c93p1ae022jsn20354001224d",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
