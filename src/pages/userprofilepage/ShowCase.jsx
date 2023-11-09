import { useState } from "react";
import OutstaindingModal from "../../components/modal/ownerworkmodal/OutstaindingModal";
import PortfolioModal from "../../components/modal/PortfolioModal";
import axios from "../../configs/axios";
import { useEffect } from "react";
import Image from "./showcasedetail/Image";

export default function ShowCase() {
  const [isOpen, setIsOpen] = useState(false)
  const [Showcase,setShowcase] = useState([])



  const createShowcase = async (data) => {
    const res = await axios.post("/user/createshowcase", data);
    const newCase = res.data.post;
    console.log(newCase)
    // setShowcase([newCase, ...Showcase]);
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

  console.log(Showcase)
  
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


          <div className="w-[270px] h-[350px] bg-primary rounded-lg overflow-hidden ">
            <Image key={ShowCase.id} img={ShowCase.imagePictue}/>
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textNavy font-semibold text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>




          <div className="w-[270px] h-[350px] bg-primary rounded-lg overflow-hidden ">
            <img src="/Show2.jpg" className="w-full h-[280px] object-cover" />
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textNavy font-semibold text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>


          <div className="w-[270px] h-[350px] bg-primary rounded-lg overflow-hidden ">
            <img src="/Show3.jpg" className="w-full h-[280px] object-cover" />
            <div className="p-3 flex justify-center items-center h-[70px]">
              <p className="line-clamp-2 text-textNavy font-semibold text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
