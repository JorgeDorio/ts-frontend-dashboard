import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};
