import React from "react";

import { useDispatch } from "react-redux";
import { useRouter } from "@hooks";

import { Button } from "ds-loud-ng";

import { userLogout } from "@session/services/session_requests_services";
import { logout } from "@store/store";

import { PATH } from "@router/constants/routes_consts";

export const LogoutButton = () => {
  const dispatch = useDispatch();
	const router = useRouter();

  const handleLogoutClick = () => {
		userLogout().then(() => {
			dispatch(logout());
			router.push(PATH.login);
		});
	};
  
  return (
    <Button 
      border={{ radius: "0px" }}
      fullWidth
      kind="text"
      onClick={handleLogoutClick}
    >
      Cerrar sesión
    </Button>
  );
};