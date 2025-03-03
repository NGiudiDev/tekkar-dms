import { createContext, useContext } from "react";

export const UserDetailContext = createContext();

export const useUserDetailContext = () => {
  return useContext(UserDetailContext);
};