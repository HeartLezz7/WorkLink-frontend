import { useContext } from "react";
import { GoogleMapContext } from "../contexts/GoogleMapContext";

export default function useGoogleMap(){
    return useContext(GoogleMapContext)
}