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

export default function Search({ userLocation, panTo }) {
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

  // console.log(suggestions) // {laoding :false , status :'Ok' , data:Array[5]}

  const fnSelect = async (address) => {
    try {
      const resultfromGeocode = await getGeocode({ address });
      // console.log("xxxxxxxxxxxxxxxxxxx",resultfromGeocode[0]);
      const { lat, lng } = await getLatLng(resultfromGeocode[0]);
      panTo({ lat, lng });
      console.log("lat:", lat, "lng:", lng);
      clearSuggestions()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold text-xl">Search :</p>
        <Combobox
          className="  border-solid rounded-xl flex flex-1 border-3 bg-primary"
          onSelect={fnSelect}
        >
          <ComboboxInput
            className="bg-backgroundWhiteGray p-2 border-2 border-solid rounded-xl flex flex-1"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Enter an address"
            onSelect={fnSelect}
          />
          <ComboboxPopover className="z-[100]">
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => {
                  return <ComboboxOption key={id} value={description} />;
                })}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
        {/* <button className="bg-primaryDarker rounded-2xl p-2 w-32 text-lg font-bold cursor-pointer text-textWhite invisible ">
          Go
        </button> */}
      </div>
    </div>
  );
}
