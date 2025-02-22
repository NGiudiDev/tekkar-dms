import { useSelector } from "react-redux";

import { LogoutButton, ProfileButton } from "../../../user/components";

import { Divider, Flex, Image, Text } from "ds-loud-ng";

export const ProfileAvatar = () => {
	const user = useSelector(state => state.user);
	
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
			
			<ProfileButton />

			<Divider />

			<LogoutButton />
		</>
	);
};