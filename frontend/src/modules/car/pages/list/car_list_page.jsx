import React from "react";

import { CarsTable } from "@car/components";
import { ListPage } from "@common/pages";

import { getCarPage } from "@car/services/car_requests_services";

import { CAR_QUERY_KEYS } from "@car/constants/car_consts";

const CarListPage = () => {
	return (
		<ListPage
			emptyMessage={{
				button: {
					children: "Nuevo",
				},
				description: "Parece que aún no has agregado ningún vehículo. Haz clic en el botón de abajo para agregar tu primer vehículo.",
				title: "Listado de vehículos vacío",
			}}
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey={CAR_QUERY_KEYS.lists()}
			getRequest={getCarPage}
			pageTitle="Vehículos"
			renderTable={(list) => <CarsTable list={list} />}
		/>
	);
};

export default CarListPage;