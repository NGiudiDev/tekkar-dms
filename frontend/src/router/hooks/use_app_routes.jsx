import React from "react";

//? car pages
import { CarCreatePage, CarDetailPage, CarListPage } from "@car/pages";

//? client pages
import { ClientCreatePage, ClientListPage, ClientDetailPage } from "@client/pages";

//? session pages
import { LoginPage, PasswordRecoveryPage } from "@session/pages";

//? service pages
import {
  ServiceCreatePage,
  ServiceDetailPage,
  ServiceListPage
} from "@service/pages";

//? service report pages
import { ServiceReportDetailPage } from "@service_report/pages";

//? user pages
import { UserCreatePage, UserDetailPage, UserListPage } from "@user/pages";

import { PATH } from "../constants/routes_consts";

export const useAppRoutes = () => {
  return [
    {
      element: <LoginPage />,
      name: "admin",
      options: {
        isFreeAccess: true,
        isPrivated: false,
        useAppLayout: false,
      },
      path: PATH.admin,
    },
    {
      element: <CarCreatePage />,
      name: "car_create",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.carCreate,
    },
    {
      element: <CarDetailPage />,
      name: "car_detail",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.carDetail,
    },
    {
      element: <CarListPage />,
      name: "cars",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.cars,
    },
    {
      element: <ClientCreatePage />,
      name: "client_create",
      options: {
        isFreeAccess: false,
        isPrivated: true,
        useAppLayout: true,
      },
      path: PATH.clientCreate,
    },
    {
      element: <ClientDetailPage />,
      name: "client_detail",
      options: {
        isFreeAccess: false,
        isPrivated: true,
        useAppLayout: true,
      },
      path: PATH.clientDetail,
    },
    {
      element: <ClientListPage />,
      name: "clients",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.clients,
    },
    {
      element: <LoginPage />,
      name: "login",
      options: {
        isFreeAccess: true,
        isPrivated: false,
        useAppLayout: false,
      },
      path: PATH.login,
    },
    {
      element: <PasswordRecoveryPage />,
      name: "password_recovery",
      options: {
        isFreeAccess: true,
        isPrivated: false,
        useAppLayout: false,
      },
      path: PATH.passwordRecovery,
    },
    {
      element: <ServiceCreatePage />,
      name: "service_create",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.serviceCreate,
    },
    {
      element: <ServiceDetailPage />,
      name: "service_detail",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.serviceDetail,
    },
    {
      element: <ServiceListPage />,
      name: "services",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.services,
    },
    {
      element: <ServiceReportDetailPage />,
      name: "service_report_detail",
      options: {
        isFreeAccess: true,
        isPrivated: false,
        useAppLayout: false,
      },
      path: PATH.serviceReport,
    },
    {
      element: <UserCreatePage />,
      name: "user_create",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.userCreate,
    },
    {
      element: <UserDetailPage />,
      name: "user_detail",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.userDetail,
    },
    {
      element: <UserListPage />,
      name: "users",
      options: {
        isFreeAccess: false,
        isPrivated:true,
        useAppLayout: true,
      },
      path: PATH.users,
    },
  ];
};