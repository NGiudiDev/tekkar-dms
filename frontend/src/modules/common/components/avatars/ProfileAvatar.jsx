import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "../../../../hooks";

import { Button, Divider, Flex, Image, Text } from "ds-loud-ng";

import { userLogout } from "../../../session/services/session.requests";
import { logout } from "../../../session/store/store";

import { PATH } from "../../constants/routes.consts";

export const ProfileAvatar = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogoutClick = () => {
		userLogout().then(() => {
			dispatch(logout());
			router.push(PATH.login);
		});
	};

	return (
		<>
			<Flex margin="l-20 y-10">
				<Image
					alt="avatar_dropdown_profile"
					size="sm"
					img={user.person.image_url}
					type="round"
				/>

				<Text margin="b-4 l-10" type="bodySemibold">
					{user.person.name}
				</Text>
			</Flex>

			<Divider />
			
			<Button 
				border={{ radius: "0px" }}
				fullWidth
				kind="text"
				onClick={handleLogoutClick}
			>
				Cerrar sesión
			</Button>
		</>
	);
};