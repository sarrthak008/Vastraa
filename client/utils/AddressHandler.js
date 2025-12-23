import axios from "axios"

const loadAddressFroMap = async (pincode) => {

     try {
         const responce = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${pincode}&countrycodes=in&addressdetails=1&limit=5`);
         if(responce.data){
            return responce.data[0]
         }else{
            return [];
         }
     } catch (error) {
        console.error(error);
        return [];
     }

}


export default loadAddressFroMap