import axios from 'axios'


const getPlaces = async (type, sw, ne) =>{
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            method: 'GET',
            
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'd9a9e9776bmsh81b21eaa5580c93p1ae022jsn20354001224d'
            }
          });
        return data;

    } catch (error) {
        console.log(error);
    }
}
export default getPlaces;