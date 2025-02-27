import React from "react";

import { useRouter } from "../../../../hooks";

import { NewButton } from "../../../common/components";
import { ListPage } from "../../../common/pages";
import { CarsTable } from "../../components";

import { getCarPage } from "../../services/car.services";

import { PATH } from "../../../../router/constants/routes.consts";

const CarListPage = () => {
	const router = useRouter();

	const handleNewCar = () => {
		router.push(PATH.carCreate);
	};

	return (
		<ListPage
			emptyMessage={{
				button: {
					children: "Nuevo",
					onClick: handleNewCar,
				},
				description: "Parece que aún no has agregado ningún vehículo. Haz clic en el botón de abajo para agregar tu primer vehículo.",
				title: "Listado de vehículos vacío",
			}}
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey="cars-list"
			getRequest={getCarPage}
			pageTitle="Vehículos"
			renderButtonsGroup={() => <NewButton onClick={handleNewCar} />}
			renderTable={(list) => <CarsTable list={list} />}
		/>
	);
};

export default CarListPage;