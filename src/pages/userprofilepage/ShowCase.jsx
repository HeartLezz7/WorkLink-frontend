import { useState } from "react";
import OutstaindingModal from "../../components/modal/ownerworkmodal/OutstaindingModal";
import PortfolioModal from "../../components/modal/PortfolioModal";
import axios from "../../configs/axios";
import { useEffect } from "react";
import ShowCaseCard from "./showcasedetail/ShowCaseCard";
import AddOutstandingModal from "../../components/modal/addShowcaseModal/AddOutstandingModal";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

export default function ShowCase({ profileData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showcase, setShowcase] = useState([]);
  const { user } = useAuth();

  const createShowcase = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/user/createshowcase", data);
      getShowcase();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getShowcase = () => {
    axios
      .get(`/user/showcase/${profileData.id}`)
      .then((res) => {
        setShowcase(res.data.getShowCase);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteShowcase = async (id) => {
    try {
      await axios.delete(`/user/showcase/${id}`);
      setShowcase(showcase.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (profileData) {
      getShowcase();
    }
  }, [profileData]);

  console.log(showcase);

  return (
    <>
      <div className="flex gap-2 items-center">
        {isLoading && <Loading />}
        <h6 className="text-textNavy">My outstanding</h6>

        {profileData?.id == user.id ? (
          <>
            <button
              className="bg-secondary px-3 py-1 rounded-lg text-lg font-bold text-textNavy"
              onClick={() => setIsOpen(true)}
            >
              Add+
            </button>
            <div>
              {isOpen && (
                <AddOutstandingModal
                  setIsOpen={setIsOpen}
                  showcase={showcase}
                  onSubmit={createShowcase}
                ></AddOutstandingModal>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-5 items-center justify-start p-3 rounded-lg border-2 border-textGrayDark w-full overflow-x-scroll ">
        <div className="flex gap-3  py-3 w-full ">
          {showcase.length == 0 ? (
            <div className="w-full text-center text-xl font-bold">
              No outstanding post now
            </div>
          ) : (
            showcase.map((el) => (
              <ShowCaseCard
                key={el.id}
                showcase={el}
                deleteShowcase={deleteShowcase}
                getShowcase={getShowcase}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
