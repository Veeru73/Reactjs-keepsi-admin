import Login from "./screens/Login_screen";
import Dashboard from "./screens/dashboard/Dashboard";
import ClientList from "./screens/client/list/ClientList";
import ClientStackedNftsList from "./screens/client/client_stacked_nfts/ClientStackedNftsList";
import ClientCdcTokenLogicScreen from "./screens/client/client_cdc_toke_logic/ClientCdcTokenLogicScreen";
import ErrorScreen from "./screens/Error_screen";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { AuthContext } from "./states/AuthContext";
import { useContext } from "react";

function App() {
  const { loggedIn } = useContext(AuthContext);

  console.log("is logged in ------------------>", loggedIn);
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Login />} />

      <Route
        path="/client-list"
        element={loggedIn ? <ClientList /> : <Login />}
      />

      <Route
        path="/client-stacked-nfts/:clientId"
        element={loggedIn ? <ClientStackedNftsList /> : <Login />}
      />
      <Route
        path="/client-cdc-token-logic-screen/:clientId"
        element={loggedIn ? <ClientCdcTokenLogicScreen /> : <Login />}
      />

      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;
