import { createContext, useContext } from "react";

export const CarCreateContext = createContext();

export const useCarCreateContext = () => {
  return useContext(CarCreateContext);
};