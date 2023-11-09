import { useState } from "react";
import EdieShowcaseModal from "../../../../src/components/modal/EdieShowcaseModal"


export default function ShowCaseCard({showcase,deleteShowcase,getShowcase}) {
  // console.log(showcase)
  const [isOpen, setIsOpen] = useState(false);
  const handdleClickDelete = () =>{
    deleteShowcase(showcase.id)
  }
  return (
    <>
    <div className="w-[270px] h-[370px] bg-primary rounded-lg overflow-hidden ">
    <img src={showcase.imagePicture} className="w-full max-h-[280px] object-cover" />
    <div className="p-3 flex justify-center items-center h-[40px]">
      <p className="line-clamp-2 text-textNavy font-semibold text-center">
        {showcase.description}
      </p>
    </div>
    <div className="flex justify-end gap-2 mt-3">
    <button onClick={() => {
      setIsOpen(true);
    }}
    className="text-textNavy font-semibold bg-gradient-to-r from-backgroundWhiteGray  to-textGrayLight
    hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-sm w-[20%] py-1.5 text-center place-content-center-center"
    >Edit</button>
    <button onClick={handdleClickDelete}
    className="text-whitetext font-semibold bg-gradient-to-r from-secondary  to-secondaryDark hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-gradiantPrimaryLight shadow-md shadow-primaryDark font-md rounded-lg text-sm w-[20%] py-1.5 text-center place-content-center-center"
    >Delete</button>
    </div>
  </div>
  
  {isOpen ? <EdieShowcaseModal
  setIsOpen={setIsOpen}
  showcase={showcase}
  getShowcase={getShowcase}
  
  /> : ""}
  </>
  )
}
