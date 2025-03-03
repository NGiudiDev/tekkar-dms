import { getAxios } from "@common/services/axios_services";

export const getServiceReportPage = (paramsObj) => {
  const qString = new URLSearchParams(paramsObj);

  return getAxios(`/service_report?${qString}`);
};