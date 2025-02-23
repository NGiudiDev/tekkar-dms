import { useContext } from "react";

import { ServiceDetailContext } from "../ServiceDetailContext";

export const useServiceDetailContext = () => {
  return useContext(ServiceDetailContext);
};