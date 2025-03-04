import React from "react";

export const UserCreatePage = React.lazy(() => import("./create/user_create_page"));
export const UserDetailPage = React.lazy(() => import("./detail/user_detail_page"));
export const UserListPage = React.lazy(() => import("./list/user_list_page"));