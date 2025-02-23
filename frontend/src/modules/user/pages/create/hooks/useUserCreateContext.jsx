import { useContext } from "react";

import { UserCreateContext } from "../UserCreateContext";

export const useUserCreateContext = () => {
  return useContext(UserCreateContext);
};