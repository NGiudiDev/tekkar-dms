export const TABLES = {
  CAR_TABLE: "cars",
  PERSON_TABLE: "persons",
  SERVICE_TABLE: "services",
  USER_TABLE: "users",
};

export const ENDPOINTS_ATRS = {
  CAR: {
    DETAIL: ["id", "brand", "license_plate", "model", "production_year"],
    LIST: ["id", "brand", "license_plate", "model"],
  },
  PERSON: {
    DETAIL: ["id", "doc_number", "email", "name", "phone", "image_url"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
    LIST_CAR: ["id", "brand", "model"],
    EXPIRED_MAIL: ["id", "brand", "license_plate", "model"],
  },
  SERVICE_REPORT: {
    CAR_DETAIL: ["id", "brand", "license_plate", "model", "production_year"],
    SERVICE_LIST: ["id", "description", "next_service_mileage", "performed_at", "service_mileage", "service_duration", "title"],
  },
  USER: {
    DETAIL: ["id"], 
    LIST: ["id"],
  }
};