import { createContext, useContext } from "react";

export const CarDetailContext = createContext();

export const useCarDetailContext = () => {
  return useContext(CarDetailContext);
};