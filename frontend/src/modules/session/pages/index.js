import React from "react";

export const LoginPage = React.lazy(() => import("./logins/login_page"));
export const PasswordRecoveryPage = React.lazy(() => import("./password_recovery/password_recovery_page"));
export const PasswordUpdatePage = React.lazy(() => import("./password_update/password_update_page"));