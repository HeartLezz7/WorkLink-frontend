import { useState } from "react";
import EdieShowcaseModal from "../../../../src/components/modal/EdieShowcaseModal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";

export default function ShowCaseCard({
  showcase,
  deleteShowcase,
  getShowcase,
}) {
  // console.log(showcase)
  const { user } = useAuth();
  const { userId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const handdleClickDelete = () => {
    deleteShowcase(showcase.id);
  };
  return (
    <>
      <div className="flex-shrink-0 w-[250px] h-[320px] bg-primary rounded-lg overflow-hidden ">
        <img
          src={showcase.imagePicture}
          className={`w-full h-[250px] object-cover ${
            user.id == userId ? "cursor-pointer" : ""
          }`}
          onClick={() => {
            if (user.id == userId) {
              setIsOpen(true);
            }
            return;
          }}
        />
        <div className="p-3 flex justify-center items-center h-[40px]">
          <p className="line-clamp-2 text-textNavy font-semibold text-center">
            {showcase.description}
          </p>
        </div>
      </div>

      {isOpen ? (
        <EdieShowcaseModal
          setIsOpen={setIsOpen}
          showcase={showcase}
          getShowcase={getShowcase}
          handdleClickDelete={handdleClickDelete}
        />
      ) : (
        ""
      )}
    </>
  );
}
