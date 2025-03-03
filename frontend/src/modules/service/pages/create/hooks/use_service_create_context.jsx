import { createContext, useContext } from "react";

export const ServiceCreateContext = createContext();

export const useServiceCreateContext = () => {
  return useContext(ServiceCreateContext);
};