import { useContext } from "react";

import { UserDetailContext } from "../UserDetailContext";

export const useUserDetailContext = () => {
  return useContext(UserDetailContext);
};