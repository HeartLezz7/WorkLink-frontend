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
    <img src={showcase.imagePicture} className="w-full max-h-[280px] object-cover" 
    onClick={() => {
      setIsOpen(true);
    }}/>
    <div className="p-3 flex justify-center items-center h-[40px]">
      <p className="line-clamp-2 text-textNavy font-semibold text-center">
        {showcase.description}
      </p>
    </div>


  
  </div>
  
  {isOpen ? <EdieShowcaseModal
  setIsOpen={setIsOpen}
  showcase={showcase}
  getShowcase={getShowcase}
  handdleClickDelete={handdleClickDelete}
  
  /> : ""}
  </>
  )
}
