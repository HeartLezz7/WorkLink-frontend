import { useState, useRef } from "react";
import "../../App";
// require('dotenv').config();
import {
  GoogleMap,
  useLoadScript,
  // useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useCallback } from "react";
// import { formatRelative } from "date-fns";

// import usePlaceAutoComplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import Search from "./Search";

const testData = {
  Work: "Cleaner",
  price: "1500/hr",
};
// const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const userLocation = {
  lat: 13.756331,
  lng: 100.501762,
};

const libraries = ["places"];
function GoogleMapApi({ open, onClose, setAddress, address }) {
  let libRef = useRef(libraries);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBEiWiJgHUTvOBOMzldus3k-PxKLhO4jX8",
    libraries: libRef.current,
  });

  //marker that user wants to see detail for
  const [userSelected, setUserSelected] = useState(null);

  const [redPin, setRedPin] = useState([]);

  console.log(redPin);
  //useCallback is function that allow you to retain same value atleast [] change

  const onMapClick = useCallback((e) => {
    console.log(e);
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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading Maps";

  //   console.log(userSelected);
  const handleClickAddress = (e) => {
    e.preventDefault();
    setAddress(redPin[0]);
    onClose();
  };

  return (
    <>
      {open && (
        <>
          {/* <Search /> */}
          <form
            className="flex-col h-screen w-screen fixed inset-0 flex items-center justify-center z-50"
            onSubmit={handleClickAddress}
          >
            <div className="w-screen h-screen bg-textGrayLight bg-opacity-70 flex flex-col justify-center items-center">
              <div className="w-3/4 h-3/4 bg-background p-5 rounded-3xl flex flex-col gap-5">
                <div className=" relative ">
                  <h4 className="w-full text-center p-2">
                    Connect with thousands of workers near you
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-bold text-xl">Search :</p>
                    <input className="bg-backgroundWhiteGray p-2 border-2 border-solid rounded-xl flex flex-1" />
                    <button className="bg-primaryDarker rounded-2xl p-2 w-32 text-lg font-bold cursor-pointer text-textWhite">
                      Go
                    </button>
                  </div>
                </div>
                {/* <Search/> */}
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={userLocation}
                  zoom={16}
                  onClick={onMapClick}
                  onLoad={onMapLoad}
                >
                  {redPin.map((marker) => (
                    <Marker
                      key={marker.time}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      data={testData}
                      // label={"Hi"}
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
                    onClick={onClose}
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
