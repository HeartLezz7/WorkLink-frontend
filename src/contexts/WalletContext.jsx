import axios from "../configs/axios";
import { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export const WalletContext = createContext();

export default function WalletContextProvider({ children }) {
  const [myTransaction, setMyTransaction] = useState([]);
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  // console.log(myTransaction);

  const createTransaction = async (data) => {
    try {
      const formData = new FormData();
      // Wait Validate  //
      setLoading(true);
      for (let key in data) {
        if (data[key]) {
          formData.append(`${key}`, data[key]);
        }
      }
      //   console.log(formData);
      const res = await axios.post("transaction/createtransaction", formData);
      setMyTransaction([res.data.transaction, ...myTransaction]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        myTransaction,
        setMyTransaction,
        loading,
        setLoading,
        createTransaction,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
