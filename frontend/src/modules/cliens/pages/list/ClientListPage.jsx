import { useRouter } from "../../../common/hooks/useRouter";

import { ListPageLayout, NewButton } from "../../../common/components";
import { ClientsTable } from "../../components";

import { getClientPage } from "../../services/client.requests";

import { PATH } from "../../../common/constants/routes.consts";

const ClientListPage = () => {
	const router = useRouter();

	const handleNewClient = () => {
		router.push(PATH.clientCreate);
	};

	return (
		<ListPageLayout
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey="clients-list"
			getRequest={getClientPage}
			pageTitle="Clientes"
			renderButtonsGroup={() => <NewButton onClick={handleNewClient} />}
			renderTable={(list) => <ClientsTable list={list} />}
		/>
	);
};

export default ClientListPage;