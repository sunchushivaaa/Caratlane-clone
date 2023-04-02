import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/category/:type"
        element={
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
