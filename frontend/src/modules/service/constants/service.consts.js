export const SERVICE_QUERY_KEYS = {
  all: ["service"],
  detail: (id, filters) => [...SERVICE_QUERY_KEYS.all, "detail", id, { filters }],
  lists: () => [...SERVICE_QUERY_KEYS.all, "list"],
  list: (filters) => [...SERVICE_QUERY_KEYS.lists(), { filters }],
};
