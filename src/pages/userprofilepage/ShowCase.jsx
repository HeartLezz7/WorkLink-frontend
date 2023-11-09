import { useState } from "react";
import OutstaindingModal from "../../components/modal/ownerworkmodal/OutstaindingModal";
import PortfolioModal from "../../components/modal/PortfolioModal";
import axios from "../../configs/axios";
import { useEffect } from "react";
import ShowCaseCard from "./showcasedetail/ShowCaseCard";

export default function ShowCase() {
  const [isOpen, setIsOpen] = useState(false)
  const [showcase,setShowcase] = useState([])

  const createShowcase = async (data) => {
  await axios.post("/user/createshowcase", data);
  };

  useEffect(()=>{
    axios
    .get('/user/showcase')
    .then((res) => {
      setShowcase(res.data.getShowCase);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  console.log(showcase)
  
  return (
    <>
      <div className="flex gap-2 items-center">
        <h6 className="text-textNavy">My outstanding</h6>
        <button 
        className="bg-secondary px-3 py-1 rounded-lg text-lg font-bold text-textNavy"
        onClick={() => setIsOpen(true)}
        >
          Add+
        </button>
        <div>
        <OutstaindingModal open={isOpen}
        title="Create Portfolio"
        maxWidth={32} 
        onClose={() => setIsOpen(false)}>

        <PortfolioModal
        onSuccess ={()=>{
          setIsOpen(false)
        }}
        onSubmit={createShowcase}

        ></PortfolioModal>

        </OutstaindingModal>
        
        </div>
      </div>
      <div className="flex gap-5 items-center justify-start p-3 rounded-lg border-2 border-textGrayDark w-fit ">
        <div className="flex gap-3  py-3 ">
              {showcase.map((el)=>(
                 <ShowCaseCard key={el.id} showcase={el}/>
              ))}
        </div>
      </div>
    </>
  );
}
