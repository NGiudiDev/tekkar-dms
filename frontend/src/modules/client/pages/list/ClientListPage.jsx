import React from "react";

import { useRouter } from "../../../../hooks";

import { ClientsTable } from "@client/components";
import { NewButton } from "@common/components";
import { ListPage } from "@common/pages";

import { getClientPage } from "@client/services/client.requests";

import { PATH } from "@router/constants/routes.consts";

const ClientListPage = () => {
	const router = useRouter();

	const handleNewClient = () => {
		router.push(PATH.clientCreate);
	};

	return (
		<ListPage
			emptyMessage={{
				button: {
					children: "Nuevo",
					onClick: handleNewClient,
				},
				description: "Parece que aún no has agregado ningún cliente. Haz clic en el botón de abajo para agregar tu primer cliente.",
				title: "Listado de clientes vacío",
			}}
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