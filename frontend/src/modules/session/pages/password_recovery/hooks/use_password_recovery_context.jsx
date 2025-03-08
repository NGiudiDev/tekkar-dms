import { createContext, useContext } from "react";

export const PasswordRecoveryContext = createContext();

export const usePasswordRecoveryContext = () => {
  return useContext(PasswordRecoveryContext);
};