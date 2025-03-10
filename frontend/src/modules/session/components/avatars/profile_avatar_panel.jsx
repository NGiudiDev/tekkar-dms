import React from "react";

import { useSelector } from "react-redux";

import { LogoutButton, ProfileButton } from "@session/components";

import { Divider, Flex, Image, Text } from "ds-loud-ng";

export const ProfileAvatarPanel = () => {
	const user = useSelector(state => state.user);
	
	return (
		<>
			<Flex margin="l-20 y-10">
				<Image
					alt="avatar_dropdown_profile"
					size="sm"
					src={user.person.image_url}
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