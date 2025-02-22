//? car pages
import { CarCreatePage, CarDetailPage, CarListPage } from "../../car/pages";

//? client pages
import { ClientListPage } from "../../cliens/pages";


//? session pages
import { LoginPage } from "../../session/pages";

//? service pages
import {
  ServiceCreatePage,
  ServiceDetailPage,
  ServiceListPage
} from "../../service/pages";

//? service report pages
import { ServiceReportPage } from "../../service_report/pages";

//? user pages
import { UserCreatePage, UserDetailPage, UserListPage } from "../../user/pages";

import { PATH } from "../constants/routes.consts";

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
      element: <ServiceReportPage />,
      name: "service_report",
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
