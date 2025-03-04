import { createContext, useContext } from "react";

export const UserCreateContext = createContext();

export const useUserCreateContext = () => {
  return useContext(UserCreateContext);
};