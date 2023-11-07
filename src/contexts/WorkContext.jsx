import axios from "../configs/axios";
import { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export const WorkContext = createContext();

export default function WorkContextProvider({ children }) {
  const [allWorks, setAllWorks] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/work")
      .then((res) => setAllWorks(res.data.allWork))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(allWorks);

  return (
    <WorkContext.Provider value={{ allWorks, setAllWorks, loading }}>
      {children}
    </WorkContext.Provider>
  );
}
