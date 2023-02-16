import React from "react";
import logo from "./logo.svg";
import Dashboard from "./pages/dashboard/Dashboard";
import Router from "./router/Router";
import { AppContainer } from "./App.style";

function App() {
  return (
    <AppContainer className="App">
      <Router />
    </AppContainer>
  );
}

export default App;
