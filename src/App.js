import Login from "./screens/Login_screen";
import Dashboard from "./screens/dashboard/Dashboard";
import ClientList from "./screens/client/list/ClientList";
import ClientStackedNftsList from "./screens/client/client_stacked_nfts/ClientStackedNftsList";
import ClientCdcTokenLogicScreen from "./screens/client/client_cdc_toke_logic/ClientCdcTokenLogicScreen";
import ErrorScreen from "./screens/Error_screen";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/client-list" element={<ClientList />} />
      <Route
        path="/client-stacked-nfts/:clientId"
        element={<ClientStackedNftsList />}
      />
      <Route
        path="/client-cdc-token-logic-screen/:clientId"
        element={<ClientCdcTokenLogicScreen />}
      />

      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;
