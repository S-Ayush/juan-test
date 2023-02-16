import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RouteDefinitions from "../router/RouteDefinition";

const sidebarMenuLinks = {
  mainMenuPages: [
    {
      title: "Dashboard",
      image: <DashboardIcon color="inherit" />,
      route: RouteDefinitions.ROUTE_DASHBOARD,
    },
    {
      title: "To-Dos",
      image: <FormatListBulletedIcon color="inherit" />,
      route: RouteDefinitions.ROUTE_TODOS,
    },
  ],
  sidebarSettingsPages: {
    userSettings: [
      {
        title: "Personal Info",
        image: <ContactEmergencyIcon color="inherit" />,
        route: RouteDefinitions.ROUTE_SETTINGS_PROFILE_INFO,
      },
      {
        title: "Manage Users",
        image: <GroupIcon color="inherit" />,
        route: RouteDefinitions.ROUTE_SETTINGS_MANAGE_USERS,
      },
    ],
  },
};

export default sidebarMenuLinks;
