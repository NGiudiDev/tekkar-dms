import React from "react";

import { ListPage } from "@common/pages";
import { ServicesTable } from "@service/components";

import { getServicePage } from "@service/services/service.requests";

import { SERVICE_QUERY_KEYS } from "@service/constants/service.consts";

const ServiceListPage = () => {
	return (
		<ListPage
			emptyMessage={{
				description: "Aún no has agregado ningún servicio. Para crear un servicio, ve al detalle del vehículo y utiliza el menú de opciones para agregar uno.",
				title: "Listado de servicios vacío",
			}}
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey={SERVICE_QUERY_KEYS.lists()}
			getRequest={getServicePage}
			pageTitle="Servicios"
			renderTable={(list) => <ServicesTable list={list} />}
		/>
	);
};

export default ServiceListPage;