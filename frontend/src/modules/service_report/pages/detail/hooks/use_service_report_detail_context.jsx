import { createContext, useContext } from "react";

export const ServiceReportDetailContext = createContext();

export const useServiceReportDetailContext = () => {
  return useContext(ServiceReportDetailContext);
};