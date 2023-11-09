import { createContext } from "react";
import { useState, useRef } from "react";
import { GOOGLE_MAP_API} from "../../configs/env"
import {GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import { useCallback } from "react";


export const GoogleMapContext = createContext()

const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  
  const userLocation = {
    lat: 13.756331,
    lng: 100.501762,
  };
  const key = 1;
  const libraries = ["places"];

export default function GoogleMapContextProvider({children}) {
    let libRef = useRef(libraries);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API,
    libraries: libRef.current,
  });

  //marker that user wants to see detail for
  const [userSelected, setUserSelected] = useState(null);

  const [redPin, setRedPin] = useState([]);
  console.log(redPin)


const thisPin = redPin[0]
  console.log(thisPin);

  //useCallback is function that allow you to retain same value atleast [] change
  const onMapClick = useCallback((e) => {
    setRedPin(() => [
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        // time: new Date(),
        // next is show this newState on Map
      },
    ]);
  }, []);

  //useRef to retain state without causing(โดยไม่ทำให้) rerender
  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({lat,lng}) => {
    mapRef.current.panTo({lat,lng})
    mapRef.current.setZoom(14)
  },[])

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading Maps";

  const handleClickAddress = (e) => {
    e.preventDefault();
    setAddress(redPin[0]);
    onClose();
  };

  
  return(
      <GoogleMapContext.Provider>
        {children}
    </GoogleMapContext.Provider>
)
}