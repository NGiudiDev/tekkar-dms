import { createContext, useContext } from "react";

export const ClientDetailContext = createContext();

export const useClientDetailContext = () => {
  return useContext(ClientDetailContext);
};