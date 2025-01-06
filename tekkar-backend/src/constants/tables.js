export const TABLES = {
  CAR_TABLE: "cars",
  SERVICE_TABLE: "services",
  USER_TABLE: "users",
};

export const ENDPOINTS_ATRS = {
  CAR: {
    DETAIL: ["id", "brand", "license_plate", "model", "owner_doc_number", "owner_name", "owner_phone", "production_year"],
    LIST: ["id", "brand", "license_plate", "model", "owner_name"],
  },
  SERVICE: {
    DETAIL: ["id", "description", "next_service_mileage", "performed_at", "price", "service_mileage", "service_duration", "title"],
    LIST: ["id", "performed_at", "service_mileage", "title"],
    LIST_CAR: ["id", "brand", "model", "owner_name"], 
  },
  SERVICE_REPORT: {
    CAR_DETAIL: ["id", "brand", "license_plate", "model", "owner_doc_number", "production_year"],
    SERVICE_LIST: ["id", "description", "next_service_mileage", "performed_at", "service_mileage", "service_duration", "title"],
  },
  USER: {
    DETAIL: ["id", "doc_number", "email", "name", "phone"], 
    LIST: ["id", "doc_number", "email", "name"],
  }
};