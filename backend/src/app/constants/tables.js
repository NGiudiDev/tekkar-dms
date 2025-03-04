export const TABLES = {
  CAR_TABLE: "cars",
  SERVICE_TABLE: "services",
  USER_TABLE: "users",
};

export const ENDPOINTS_ATRS = {
  CAR: {
<<<<<<< Updated upstream
    DETAIL: ["id", "brand", "license_plate", "model", "owner_doc_number", "owner_email", "owner_name", "owner_phone", "production_year"],
    LIST: ["id", "brand", "license_plate", "model", "owner_name"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
    LIST_CAR: ["id", "brand", "model", "owner_name"],
    EXPIRED_MAIL: ["id", "brand", "license_plate", "model", "owner_email", "owner_name"],
  },
  SERVICE_REPORT: {
    CAR_DETAIL: ["id", "brand", "license_plate", "model", "owner_doc_number", "production_year"],
    SERVICE_LIST: ["id", "description", "next_service_mileage", "performed_at", "service_mileage", "service_duration", "title"],
=======
    DETAIL: ["id", "brand", "license_plate", "model", "production_year"],
    LIST: ["id", "brand", "license_plate", "model"],
  },
  PERSON: {
    DETAIL: ["id", "doc_number", "email", "image_url", "name", "phone", "roles"],
    LIST: ["id", "doc_number", "email", "image_url", "name"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    EXPIRED_SERVICE_MAIL: ["id", "brand", "license_plate", "model"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
>>>>>>> Stashed changes
  },
  USER: {
    DETAIL: ["id", "doc_number", "email", "name", "phone", "profile_image_url"], 
    LIST: ["id", "doc_number", "email", "name", "profile_image_url"],
  }
};