import { useEffect } from "react";
import GoogleMapApi from "../googlemap/googlemapapi";

export default function ModalMap({
  open,
  onClose,
  setAddress,
  address,
  input,
  setInput,
  onWorkModal,
  setFilter,
  onFindingWork,
}) {
  return (
    <div className="bg-gray-500">
      <GoogleMapApi
        input={input}
        setInput={setInput}
        open={open}
        onClose={onClose}
        setAddress={setAddress}
        setFilter={setFilter}
        address={address}
        onWorkModal={onWorkModal}
        onFindingWork={onFindingWork}
      />
    </div>
  );
}
