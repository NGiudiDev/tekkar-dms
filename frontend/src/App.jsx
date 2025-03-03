import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useAutomaticLogin } from "@session/hooks/use_automatic_login";
import { useAppRoutes } from "@router/hooks/useAppRoutes";

import { NotFoundMessageLayout, PageLoadingLayout } from "@common/components";
import { CustomRoute } from "@router/components/CustomRoute";

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
						element={<CustomRoute {...route.options}>{route.element}</CustomRoute>}
						key={route.path}
						path={route.path}
					/>
				)}

				<Route path="*" element={<NotFoundMessageLayout />} />
			</Routes>
		</Suspense>
	);
};