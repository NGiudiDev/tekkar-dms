import { useRouter } from "../../../../hooks";

import { NewButton } from "../../../common/components";
import { ListPage } from "../../../common/pages";
import { UsersTable } from "../../components";

import { getUserPage } from "../../services/user.requests";

import { PATH } from "../../../../router/constants/routes.consts";

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
			fetchKey="users-list"
			getRequest={getUserPage}
			pageTitle="Usuarios"
			renderButtonsGroup={() => <NewButton onClick={handleNewUser} />}
			renderTable={(list) => <UsersTable list={list} />}
		/>
	);
};

export default UserListPage;