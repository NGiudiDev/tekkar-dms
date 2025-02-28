export const SERVICE_QUERY_KEYS = {
  all: ["service"],
  lists: () => [...SERVICE_QUERY_KEYS.all, "list"],
  list: (filters) => [...SERVICE_QUERY_KEYS.lists(), { filters }],
};
