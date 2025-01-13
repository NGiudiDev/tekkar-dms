import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useAutomaticLogin } from "./modules/session/hooks/useAutomaticLogin";
import { useAppRoutes } from "./modules/common/hooks";

import { CustomRouteLayout, NotFoundMessageLayout, PageLoadingLayout } from './modules/common/components';

export const App = () => {
	const automaticLogin = useAutomaticLogin();
	const routes = useAppRoutes();

	if (automaticLogin.isLoading)
		return <PageLoadingLayout isFullHeight />;

  return (
		<Suspense fallback={<PageLoadingLayout isFullHeight />}>
			<Routes>
				{routes.map((route) =>
					<Route
						element={<CustomRouteLayout {...route.options}>{route.element}</CustomRouteLayout>}
						key={route.path}
						path={route.path}
					/>
				)}

				<Route path="*" element={<NotFoundMessageLayout />} />
			</Routes>
		</Suspense>
	);
};
