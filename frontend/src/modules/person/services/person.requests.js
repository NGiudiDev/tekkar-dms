import { putAxios } from "@common/services/axios.services";

export const updatePersonDetail = (id, data) => {
  return putAxios(`/persons/${id}`, data);
};