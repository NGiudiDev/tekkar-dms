import { useContext } from "react";

import { ServiceCreateContext } from "../ServiceCreateContext";

export const useServiceCreateContext = () => {
  return useContext(ServiceCreateContext);
};