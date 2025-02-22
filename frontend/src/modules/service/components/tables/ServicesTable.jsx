import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { ServiceMileageCol, ServicePerformedAtCol, ServiceTitleCol } from "../";
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
			content: (service) => <ServiceTitleCol margin="y-10" service={service} />,
			label: "Nombre",
			width: "30%",
		},
		{
			content: (service) => <ServicePerformedAtCol margin="y-10" service={service}/>,
			label: "Realizado el",
			width: "15%",
		},
		{
			content: (service) => <CarDescriptionCol margin="y-10" car={service.car}/>,
			label: "Vehículo",
			width: "20%",
		},
		{
			content: (service) => <ServiceMileageCol margin="y-10" service={service} />,
			label: "Kilometraje",
			width: "15%",
		},
		{
			content: (service) => <PersonNameCol margin="y-10" person={service.car.person} />,
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
