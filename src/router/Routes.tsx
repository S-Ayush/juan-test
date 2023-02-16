import { RouteObject } from "react-router-dom";
import RouteDefinitions from "./RouteDefinition";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Todos from "../pages/todos/Todos";
import ManageUsers from "../pages/settings/manageUsers/ManageUsers";
import ProfileInfo from "../pages/settings/profileInfo/ProfileInfo";

const RouteList: RouteObject[] = [
  {
    path: RouteDefinitions.ROUTE_NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: RouteDefinitions.ROUTE_HOME,
    element: <Login />,
  },
  {
    path: RouteDefinitions.ROUTE_LOGIN,
    element: <Login />,
  },
  {
    path: RouteDefinitions.ROUTE_DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: RouteDefinitions.ROUTE_TODOS,
    element: <Todos />,
  },
  {
    path: RouteDefinitions.ROUTE_SETTINGS_MANAGE_USERS,
    element: <ManageUsers />,
  },
  {
    path: RouteDefinitions.ROUTE_SETTINGS_PROFILE_INFO,
    element: <ProfileInfo />,
  },
];

export default RouteList;
