import { createContext, useContext } from "react";

export const DetailPageContext = createContext();

export const useDetailPageContext = () => {
  return useContext(DetailPageContext);
};