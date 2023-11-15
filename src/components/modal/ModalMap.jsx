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
        address={address}
        onWorkModal={onWorkModal}
        onFindingWork={onFindingWork}
      />
    </div>
  );
}
