import axios from "../configs/axios";
import { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { STATUS_FINDING, STATUS_MAKEDEAL } from "../configs/constants";

export const WorkContext = createContext();

export default function WorkContextProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [allWorks, setAllWorks] = useState([]);
  const [mySignWork, setMySignWork] = useState([]);
  const [myDoingWork, setMyDoingWork] = useState([]);
  const [findingWork, setFindingWork] = useState([]);
  const [showWork, setShowWork] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCatId, setSearchCatId] = useState(0);
  const [searchLocation, setSearchLocation] = useState();

  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/work")
      .then((res) => {
        setAllWorks(res.data.allWork);
        const works = res.data.allWork.filter(
          (work) => work.statusWork === "finding"
        );
        setFindingWork(works);
        setShowWork(works);
        const doingWork = res.data.allWork.filter(
          (work) => work.workerId == user.id
        );
        setMyDoingWork(doingWork);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    axios
      .get("/work/allCategories")
      .then((res) => setCategory(res.data.allCategories))
      .catch((err) => console.log(err));
    axios
      .get("/work/mysignwork")
      .then((res) => {
        const mySignWork = res.data.mySignWork.filter((el) => {
          if (el.work.statusWork === STATUS_FINDING && !el.work.workerId) {
            return true;
          }
          return false;
        });
        setMySignWork(mySignWork);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let baseWork = [...findingWork];
    if (searchName) {
      baseWork = baseWork.filter((el) => {
        if (el.title.toLowerCase().includes(searchName.toLowerCase())) {
          return true;
        }
        return false;
      });
    }
    if (searchCatId) {
      baseWork = baseWork.filter((el) => el.categoryId == searchCatId);
    }
    setShowWork(baseWork);
  }, [searchName, searchCatId, searchLocation]);

  const createWork = async (data) => {
    const res = await axios.post("work/creatework", data);
    setAllWorks([res.data.createWork, ...allWorks]);
  };

  const editWork = async (data) => {
    const res = await axios.patch("work/editwork", data);
    const editedWork = res.data.editedWork;
    const editIndex = allWorks.findIndex((el) => el.id === editedWork.id);
    const newAllWorks = [...allWorks];
    newAllWorks.splice(editIndex, 1, editedWork);
    setAllWorks(newAllWorks);
  };

  const cancleWork = async (workId) => {
    try {
      console.log("first");
      const res = await axios.patch(`work/cancle/${workId}`);
      const cancleWork = res.data.cancleWork;
      const cancleIndex = allWorks.findIndex((el) => el.id === cancleWork.id);
      const newAllWorks = [...allWorks];
      newAllWorks.splice(cancleIndex, 1, cancleWork);
      setAllWorks(newAllWorks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WorkContext.Provider
      value={{
        createWork,
        editWork,
        cancleWork,
        allWorks,
        setAllWorks,
        loading,
        category,
        findingWork,
        showWork,
        setSearchName,
        searchName,
        searchCatId,
        setSearchCatId,
        searchLocation,
        setSearchLocation,
        mySignWork,
        setMySignWork,
        myDoingWork,
        setMyDoingWork,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
}
