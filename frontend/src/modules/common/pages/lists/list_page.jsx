import React, { useState } from "react";
import PropTypes from "prop-types";

import { useQuery } from "@tanstack/react-query";

import { PageLoadingLayout, PageMessageLayout } from "@common/components";

import { Flex, Pagination, Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	emptyMessage: {
		button: null,
		description: "empty message description",
		title: "empty message title",
	},
	errorMessage: {
		description: "error message description",
		title: "error message title",
	},
	fetchKey: "",
	getRequest: () => {},
	pageTitle: "page title",
	renderButtonsGroup: null,
	renderTable: null,
};

export const ListPage = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const [page, setPage] = useState(1);
  
	const query = useQuery({
		queryFn: () => attrs.getRequest({ page }),
		queryKey: [attrs.fetchKey, page],
	});

	const handlePageChange = (page) => {
		setPage(page);
	};

	if (query.isLoading) return <PageLoadingLayout />;
 
	if (query.error) {
		return (
			<PageMessageLayout 
				description={attrs.errorMessage.description}
				title={attrs.errorMessage.title}
			/>
		);
	}

	if (query.data.pagination.total === 0) {
		return (
			<PageMessageLayout
				button={attrs.emptyMessage.button}
				description={attrs.emptyMessage.description}
				title={attrs.emptyMessage.title}
			/>
		);
	}

	return (
		<>
			<Flex hAlign="space-between" margin="b-24">
				<Text type="pageTitle">
					{attrs.pageTitle}
				</Text>

				{attrs.renderButtonsGroup && (
					<div>
						{attrs.renderButtonsGroup()}
					</div>
				)}
			</Flex>

			{attrs.renderTable && attrs.renderTable(query.data.list)}

			{ query.data.pagination.pages > 1 && (
				<Pagination 
					margin="t-20"
					onChange={handlePageChange}
					page={query.data.pagination.page}
					pages={query.data.pagination.pages}
				/>
			)}
		</>
	);
};

ListPage.propTypes = {
	emptyMessage: PropTypes.shape({
		button: PropTypes.object,
		description: PropTypes.string,
		title: PropTypes.string,
	}),
	errorMessage: PropTypes.object,
	fetchKey: PropTypes.string,
	getRequest: PropTypes.func.isRequired,
	pageTitle: PropTypes.string,
	renderButtonsGroup: PropTypes.func,
	renderTable: PropTypes.func,
};