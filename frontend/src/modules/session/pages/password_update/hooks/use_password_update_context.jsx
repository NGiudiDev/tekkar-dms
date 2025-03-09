import { createContext, useContext } from "react";

export const PasswordUpdateContext = createContext();

export const usePasswordUpdateContext = () => {
  return useContext(PasswordUpdateContext);
};