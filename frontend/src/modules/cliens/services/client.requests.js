import { getAxios, postAxios, putAxios } from "../../common/services/axios.services";

export const createClient = (data) => {
  return postAxios("/clients", data);
};

export const getClientDetail = (id) => {
  return getAxios(`/clients/${id}`);
};

export const getClientPage = (paramsObj) => {
  const qString = new URLSearchParams(paramsObj);

  return getAxios(`/clients?${qString}`);
};

export const updateClientDetail = (id, data) => {
  return putAxios(`/clients/${id}`, data);
};