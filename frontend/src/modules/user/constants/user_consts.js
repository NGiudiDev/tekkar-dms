//? react-query keys.
export const USER_QUERY_KEYS = {
  all: ["user"],
  detail: (id, filters) => [...USER_QUERY_KEYS.all, "detail", id, { filters }],
  lists: () => [...USER_QUERY_KEYS.all, "list"],
  list: (filters) => [...USER_QUERY_KEYS.lists(), { filters }],
};

//? modal names.
export const SET_USER_AS_CLIENT_MODAL_NAME = "setUserAsClient";