import { useState, useRef } from "react";
import { GOOGLE_MAP_API } from "../../configs/env";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useCallback } from "react";
import "@reach/combobox/styles.css";
import Search from "./Search";
import googleAxios from "../../configs/googleAxios";

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

function GoogleMapApi({ open, onClose, setAddress }) {
  const [mapAddress,setMapAddress] = useState([])
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
  console.log("State-----RedPin", thisPin);

  const geoCoding = async (pin) => {
    try {
      // console.log(pin,"Pin AAAAAAAAAA")
      const result = await googleAxios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pin.lat},${pin.lng}&key=${GOOGLE_MAP_API}`
      );
      setMapAddress(result.data.results[0].formatted_address);
      console.log(result.data.results[0].formatted_address)
      return result.data.results[0].formatted_address;
    } catch (err) {
      console.log(err);
    }
  };

const getMap = (e) => {
const pin = onMapClick(e)
// console.log(pin,"pin addressssssssssssssssssssssssssss")
geoCoding(pin)
  }

  

  //useCallback is function that allow you to retain same value atleast [] change

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

console.log(mapAddress,"xxxxx")

  return (
    <>
      {open && (
        <>
          <form
            className="flex-col h-screen w-screen fixed inset-0 flex items-center justify-center z-50"
            onSubmit={(e) => {
              e.preventDefault();
              setAddress(mapAddress)
              onClose();
            }}
          >
            <div className="w-screen h-screen bg-textGrayLight bg-opacity-70 flex flex-col justify-center items-center">
              <div className="w-3/4 h-3/4 bg-background p-5 rounded-3xl flex flex-col gap-5">
                <div className=" relative ">
                  <h4 className="w-full text-center p-2">
                    Connect with thousands of workers near you
                  </h4>
                  <Search userLocation={userLocation}  panTo={panTo}/>
                </div>

                <GoogleMap
                  key={key}
                  mapContainerStyle={mapContainerStyle}
                  center={userLocation}
                  zoom={12}
                  onClick={getMap}
                  onLoad={onMapLoad}
                >
                  {redPin.map((marker) => (
                    <Marker
                      key={marker.time}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      //Show Marker when click
                      onClick={() => {
                        setUserSelected(marker);
                      }}
                    />
                  ))}

                  {userSelected ? (
                    <InfoWindow
                      position={{
                        lat: userSelected.lat,
                        lng: userSelected.lng,
                      }}
                      onCloseClick={() => setUserSelected(null)}
                    >
                      <div>
                        <p className="text-2xl">Work Place Work Link</p>
                        <p>Have Hotel Have room Have.....</p>
                      </div>
                    </InfoWindow>
                  ) : null}
                </GoogleMap>
                <div className="flex justify-end items-center gap-2">
                  <button className="bg-primaryDarker rounded-2xl p-2 w-32 text-lg font-bold cursor-pointer text-textWhite">
                    Submit
                  </button>
                  <button
                    className="bg-secondaryDark rounded-2xl p-2 w-32 text-textWhite text-lg font-bold cursor-pointer"
                    onClick={() => {
                      onClose();
                      setAddress("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default GoogleMapApi;
