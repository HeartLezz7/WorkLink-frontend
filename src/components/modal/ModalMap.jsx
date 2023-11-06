import GoogleMapApi from "../googlemap/googlemap";

export default function ModalMap({open,onClose,setAddress,address}) {
  return (
    <div className="bg-gray-500">
        <GoogleMapApi open={open} onClose={onClose} setAddress={setAddress} address={address}/>
    </div>
  )
}
