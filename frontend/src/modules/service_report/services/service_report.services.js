import { getAxios } from "../../common/services/axios.services";

export const getServiceReportPage = (paramsObj) => {
  const qString = new URLSearchParams(paramsObj);

  return getAxios(`/service_report?${qString}`);
}