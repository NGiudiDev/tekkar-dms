import { useRouter } from "./use_router";

import { PATH } from "@router/constants/routes.consts";

export const useSidebarButtons = () => {
	const router = useRouter();

	const buttons = [
    {
			icon: "car",
			label: "Vehículos",
			onClick: () => router.push(PATH.cars),
			to: PATH.cars,
		},
		{
			icon: "wrench",
			label: "Servicios",
			onClick: () => router.push(PATH.services),
			to: PATH.services,
		},
		{
			icon: "person",
			label: "Clientes",
			onClick: () => router.push(PATH.clients),
			to: PATH.clients,
		},
		{
			icon: "user",
			label: "Usuarios",
			onClick: () => router.push(PATH.users),
			to: PATH.users,
		}
  ];

	return { buttons };
};