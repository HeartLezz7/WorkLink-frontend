import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

export default function useWallet() {
  return useContext(WalletContext);
}
