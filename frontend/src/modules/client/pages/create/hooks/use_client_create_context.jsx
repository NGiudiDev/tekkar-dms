import { createContext, useContext } from "react";

export const ClientCreateContext = createContext();

export const useClientCreateContext = () => {
  return useContext(ClientCreateContext);
};