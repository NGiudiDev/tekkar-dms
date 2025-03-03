import React from "react";

import { useRouter } from "@hooks";

import { NewButton } from "@common/components";
import { ListPage } from "@common/pages";
import { UserTable } from "@user/components";

import { getUserPage } from "@user/services/user_requests_services";

import { USER_QUERY_KEYS } from "@user/constants/user_consts";
import { PATH } from "@router/constants/routes_consts";

const UserListPage = () => {
	const router = useRouter();

	const handleNewUser = () => {
		router.push(PATH.userCreate);
	};

	return (
		<ListPage
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey={USER_QUERY_KEYS.lists()}
			getRequest={getUserPage}
			pageTitle="Usuarios"
			renderButtonsGroup={() => <NewButton onClick={handleNewUser} />}
			renderTable={(list) => <UserTable list={list} />}
		/>
	);
};

export default UserListPage;