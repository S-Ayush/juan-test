import { ReactComponent as Dashboard } from "../assests/sidebarAssets/dashboard-icon.svg"
import { ReactComponent as Opportunities } from "../assets/sidebarAssets/opportunities-icon.svg";
import { ReactComponent as Forecasting } from "../assets/sidebarAssets/forecasting-icon.svg";
import { ReactComponent as Trends } from "../assets/sidebarAssets/trends-icon.svg";
import { ReactComponent as UpcomingMeetings } from "../assets/sidebarAssets/upcoming-meetings-icon.svg";
import { ReactComponent as LinkedAccounts } from "../assets/sidebarAssets/linked-accounts-icon.svg";
import { ReactComponent as PersonalInfo } from "../assests/sidebarAssets/personal-info-icon.svg";
import { ReactComponent as ManageMetrics } from "../assets/sidebarAssets/manage-metrics-icon.svg";
import { ReactComponent as ManageFilters } from "../assets/sidebarAssets/manage-filters-icon.svg";
import { ReactComponent as OnBoarding } from "../assets/sidebarAssets/onboarding-icon.svg";
import { ReactComponent as ManageUsers } from "../assests/sidebarAssets/manage-users-icon.svg";
import { ReactComponent as ForecastSettings } from "../assets/sidebarAssets/forecast-settings-icon.svg";
import { ReactComponent as Topics } from "../assets/sidebarAssets/topics-icon.svg";
import { ReactComponent as Competitors } from "../assets/sidebarAssets/competitors-icon.svg";
import { ReactComponent as ToDos } from "../assests/sidebarAssets/todos-icon.svg";
import { ReactComponent as TPA } from "../assets/sidebarAssets/tpa.svg";
import { ReactComponent as Workflows } from "../assets/sidebarAssets/workflows-icon.svg";
import RouteDefinitions from "../router/RouteDefinition";

const sidebarMenuLinks = {
  mainMenuPages: [
    {
      title: "Dashboard",
      image: <Dashboard />,
      route: RouteDefinitions.ROUTE_DASHBOARD,
    },
    {
      title: "To-Dos",
      image: <ToDos />,
      route: RouteDefinitions.ROUTE_TODOS,
    },
  ],
  sidebarSettingsPages: {
    userSettings: [
      {
        title: "Personal Info",
        image: <PersonalInfo />,
        route: RouteDefinitions.ROUTE_SETTINGS_PROFILE_INFO,
      },
      {
        title: "Manage Users",
        image: <ManageUsers />,
        route: RouteDefinitions.ROUTE_SETTINGS_MANAGE_USERS,
      },
    ],
  },
};

export default sidebarMenuLinks;
