import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { CarDescriptionCol, CarLicensePlateCol } from "../../components";
import { PersonNameCol } from "../../../person/components";

import { Table } from "ds-loud-ng";

import { PATH } from "../../../common/constants/routes.consts";

const DEFAULT_PROPS = {
	list: [],
};

export const CarsTable = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const columns = [
		{
			content: (car) => <CarDescriptionCol margin="y-10" car={car} />,
			label: "Marca",
			width: "33%",
		},
		{
			content: (car) => <CarLicensePlateCol margin="y-10" car={car} />,
			label: "Modelo",
			width: "33%",
		},
		{
			content: (car) => <PersonNameCol margin="y-10" person={car.person} />,
			label: "Propietario",
			width: "33%",
		},
	];

	const handleRowClick = (row) => {
		router.push(`${PATH.cars}/${row.id}`);
	};

	return (
		<Table
			columns={columns}
			data={attrs.list}
			onClick={handleRowClick}
		/>
	);
};

CarsTable.propTypes = {
	list: PropTypes.array,
};
