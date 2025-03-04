import { putAxios } from "@common/services/axios_services";

export const updatePersonDetail = (id, data) => {
  return putAxios(`/persons/${id}`, data);
};