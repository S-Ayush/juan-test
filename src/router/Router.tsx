import React from "react";
import { Routes, Route } from "react-router-dom";
import RouteList from "./Routes";

function Router() {
  return (
    <Routes>
      {RouteList.map((route: any, i) => (
        <Route {...route} key={i}></Route>
      ))}
    </Routes>
  );
}

export default Router;
