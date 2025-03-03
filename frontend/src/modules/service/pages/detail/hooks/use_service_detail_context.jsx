import { createContext, useContext } from "react";

export const ServiceDetailContext = createContext();

export const useServiceDetailContext = () => {
  return useContext(ServiceDetailContext);
};