import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RouteDefinitions from "./RouteDefinition";
import RouteList from "./Routes";

function Router() {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user") && currentPath) {
      if (!currentPath.includes("login")) {
        navigate(RouteDefinitions.ROUTE_LOGIN);
      }
    }
  }, [currentPath]);

  return (
    <Routes>
      {RouteList.map((route: any, i) => (
        <Route {...route} key={i}></Route>
      ))}
    </Routes>
  );
}

export default Router;
