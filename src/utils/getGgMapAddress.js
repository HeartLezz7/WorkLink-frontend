import { GOOGLE_MAP_API } from "../configs/env";
import googleAxios from "../configs/googleAxios";
const geoCoding = async (pin) => {
  try {
    // console.log(pin,"Pin AAAAAAAAAA")
    const result = await googleAxios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pin.lat},${pin.lng}&key=${GOOGLE_MAP_API}`
    );
    return result.data.results[0].formatted_address;
  } catch (err) {
    console.log(err);
  }
};
export default geoCoding;
