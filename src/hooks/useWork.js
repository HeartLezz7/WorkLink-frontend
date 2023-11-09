import { useContext } from "react";
import { WorkContext } from "../contexts/WorkContext";

export default function useWork() {
  return useContext(WorkContext);
}
