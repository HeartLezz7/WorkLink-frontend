import { useContext } from "react";
import { MapContext } from "../contexts/MapContext";

export default function useMap(){
    return useContext(MapContext)
}