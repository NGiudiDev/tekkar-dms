import { useContext } from "react";

import { CarDetailContext } from "../CarDetailContext";

export const useCarDetailContext = () => {
  return useContext(CarDetailContext);
};