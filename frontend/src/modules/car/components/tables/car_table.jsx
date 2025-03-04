import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "@hooks";

import { CarDescriptionCol, CarLicensePlateCol } from "@car/components";
import { PersonNameCol } from "@person/components";

import { Table } from "ds-loud-ng";

import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
	list: [],
};

export const CarTable = (props) => {
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

CarTable.propTypes = {
	list: PropTypes.array,
};