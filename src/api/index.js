import axios from 'axios'
const URL= 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const getPlaces = async (sw, ne) =>{
    try {
        const {data:{data}} = await axios.get(URL, {
            method: 'GET',
            
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lat,
              tr_latitude: ne.lng,
              
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'd9a9e9776bmsh81b21eaa5580c93p1ae022jsn20354001224d'
            }
          });
          console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}
export default getPlaces;