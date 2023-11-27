import axios from "../configs/axios";
import { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { STATUS_FINDING } from "../configs/constants";
import findDistance from "../utils/findDistance";

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
  const [locationName, setLocationName] = useState("");
  const [searchLocation, setSearchLocation] = useState();
  const [searchRemote, setSearchRemote] = useState(false);

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
          (work) => work.workerId == user?.id
        );
        setMyDoingWork(doingWork);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    axios
      .get("/work/allCategories")
      .then((res) => setCategory(res.data.allCategories))
      .catch((err) => console.log(err));
    if (user) {
      axios
        .get("/work/mysignwork")
        .then((res) => {
          const signWork = res.data.mySignWork.filter((el) => {
            if (el.work.statusWork === STATUS_FINDING && !el.work.workerId) {
              return true;
            }
            return false;
          });
          setMySignWork(signWork);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

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
    if (searchLocation) {
      baseWork = baseWork.filter((el) => {
        if (el.isOnsite) {
          let pointA = searchLocation;
          let pointB = { lat: el.addressLat, lng: el.addressLong };
          let distace = findDistance(pointA, pointB);
          if (distace < 10) {
            return true;
          }
        }
      });
    }
    if (searchRemote) {
      baseWork = baseWork.filter((el) => !el.isOnsite);
    }
    setShowWork(baseWork);
  }, [searchName, searchCatId, searchLocation, searchRemote]);

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

  const cancelWork = async (workId) => {
    try {
      const res = await axios.patch(`work/cancel/${workId}`);
      const cancelWork = res.data.cancelWork;
      const cancelIndex = allWorks.findIndex((el) => el.id === cancelWork.id);
      const newAllWorks = [...allWorks];
      newAllWorks.splice(cancelIndex, 1, cancelWork);
      setAllWorks(newAllWorks);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async (workId) => {
    try {
      const res = await axios.delete(`/work/signoutwork/${workId}`);
      const newSignUpWork = [...mySignWork];
      const signoutIndex = newSignUpWork.findIndex(
        (el) => el.id == res.data.deleteChallenger.workId
      );
      newSignUpWork.splice(signoutIndex, 1);
      setMySignWork(newSignUpWork);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WorkContext.Provider
      value={{
        createWork,
        editWork,
        cancelWork,
        signOut,
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
        locationName,
        setLocationName,
        setSearchRemote,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
}
