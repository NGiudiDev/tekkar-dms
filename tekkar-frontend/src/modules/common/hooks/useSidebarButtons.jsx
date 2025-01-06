import { useRouter } from "./useRouter";

import { PATH } from "../constants/routes.consts";

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
			icon: "users",
			label: "Usuarios",
			onClick: () => router.push(PATH.users),
			to: PATH.users,
		}
  ];

	return { buttons };
};