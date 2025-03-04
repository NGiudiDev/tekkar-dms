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
    LIST: ["id", "doc_number", "email", "image_url", "name"],
    DETAIL: ["id", "doc_number", "email", "image_url", "name", "phone", "roles"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
  },
  PERSON: {
    DETAIL: ["id", "doc_number", "email", "image_url", "name", "phone", "roles"],
    LIST: ["id", "doc_number", "email", "image_url", "name"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    EXPIRED_SERVICE_MAIL: ["id", "brand", "license_plate", "model"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
  },
  USER: {
    DETAIL: ["id"], 
    LIST: ["id"],
  }
};