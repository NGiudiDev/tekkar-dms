import { ListPageLayout } from "../../../common/components";
import { ServicesTable } from "../../components";

import { getServicePage } from "../../services/service.requests";

const ServiceListPage = () => {
	return (
		<ListPageLayout
			emptyMessage={{
				description: "Aún no has agregado ningún servicio. Para crear un servicio, ve al detalle del vehículo y utiliza el menú de opciones para agregar uno.",
				title: "Listado de servicios vacío",
			}}
			errorMessage={{
				description: "Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde.",
				title: "Error al obtener la información",
			}}
			fetchKey="services-list"
			getRequest={getServicePage}
			pageTitle="Servicios"
			renderTable={(list) => <ServicesTable list={list} />}
		/>
	);
};

export default ServiceListPage;