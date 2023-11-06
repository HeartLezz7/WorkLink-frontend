import { useState } from "react";
import usePlaceAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
export default function Search({ userLocation }) {
  //return number variable in obj
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlaceAutoComplete({
    //near location to some location
    requestOptions: {
      location: { lat: () => userLocation.lat, lng: () => userLocation.lng },
      // 200 kimo t0 meter
      radius: 200 * 1000,
    },
  });
  console.log(ready);
  console.log(value);
  console.log(status);
  console.log(data);
  console.log(clearSuggestions);

  return (
    <div>
      <div
        className="flex items-center justify-center gap-2"
        onSelect={(address) => {
          console.log(address);
        }}
      >
        <p className="font-bold text-xl">Search :</p>
        <input
          className="bg-backgroundWhiteGray p-2 border-2 border-solid rounded-xl flex flex-1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter Address"
        />
        {/* <div>
          {status === "OK" &&
            data.map(({ id, description }) => {
              return <div key={id}>{description}</div>;
              // <ComboboxOption key={id} value={description}/>
            })}
        </div> */}

        <button className="bg-primaryDarker rounded-2xl p-2 w-32 text-lg font-bold cursor-pointer text-textWhite">
          Go
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        <p className="font-bold text-xl invisible">Search :</p>

        {/* <Combobox
        className="bg-textWhite border-solid rounded-xl flex flex-1"
          onSelect={(address) => {
            console.log(address);
          }}
        > */}
          {/* <ComboboxInput
            className="bg-textWhite p-2 border-2 border-solid rounded-xl flex flex-1"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Enter an address"
          /> */}
           {/* <ComboboxPopover> */}
           <div>
          {status === "OK" &&
            data.map(({ id, description }) => {
              return <div key={id}>{description}</div>;
              // <ComboboxOption key={id} value={description}/>
            })}
        </div>
        {/* </ComboboxPopover> */}
        {/* </Combobox> */}

        <button className="bg-primaryDarker rounded-2xl p-2 w-32 text-lg font-bold cursor-pointer text-textWhite invisible ">
          Go
        </button> 
        </div>
    </div>
  );
}
