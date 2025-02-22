import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { ServiceMileageTC, ServicePerformedAtTC, ServiceTitleTC } from "../";
import { CarDescriptionCol } from "../../../car/components";
import { PersonNameCol } from "../../../person/components";

import { Table } from "ds-loud-ng";

import { PATH } from "../../../common/constants/routes.consts";

const DEFAULT_PROPS = {
	list: [],
};

export const ServicesTable = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const columns = [
		{
			content: (service) => <ServiceTitleTC margin="y-10" service={service} />,
			label: "Nombre",
			width: "30%",
		},
		{
			content: (service) => <ServicePerformedAtTC margin="y-10" service={service}/>,
			label: "Realizado el",
			width: "15%",
		},
		{
			content: (service) => <CarDescriptionCol margin="y-10" car={service.car}/>,
			label: "Vehículo",
			width: "20%",
		},
		{
			content: (service) => <ServiceMileageTC margin="y-10" service={service} />,
			label: "Kilometraje",
			width: "15%",
		},
		{
			content: (service) => <PersonNameCol margin="y-10" car={service.car.person} />,
			label: "Propietario",
			width: "20%",
		},
	];

	const handleRowClick = (row) => {
		router.push(`${PATH.services}/${row.id}`);
	};

	return (
		<Table
			columns={columns}
			data={attrs.list}
			onClick={handleRowClick}
		/>
	);
};

ServicesTable.propTypes = {
	list: PropTypes.array,
};
