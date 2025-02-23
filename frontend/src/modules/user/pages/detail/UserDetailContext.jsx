import { createContext } from "react";
import PropTypes from "prop-types";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "../../../../hooks";
import { useSelector } from "react-redux";

import { getUserDetail } from "../../services/user.requests";

export const UserDetailContext = createContext();

const DEFAULT_PROPS = {
	children: null,
};

export const UserDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const loggedUser = useSelector(state => state.user);
	const queryClient = useQueryClient();
	const router = useRouter();

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey:	["user-detail", id],
		queryFn: async () =>  getUserDetail(id),
	});

	const handleImageChange = () => {
		//? The GET request is invalidated to trigger a refetch and retrieve the updated data.
		queryClient.invalidateQueries({ queryKey: ["user-detail"] });
	};

	const valueObj = {
		error: query.error,
		handleImageChange,
		isLoading: query.isLoading,
		isLoggedUser: id === loggedUser.id,
		user: query.data,
	};

	return (
		<UserDetailContext.Provider value={valueObj}>
			{attrs.children}
		</UserDetailContext.Provider>
	);
};

UserDetailProvider.propTypes = {
	children: PropTypes.node,
};
