import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/category/:type" element={<Category />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}
