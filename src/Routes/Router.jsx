import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AdminPage from "../pages/AdminPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/admin"
          element={<Navigate to="/control-center" replace />}
        />
        <Route path="/control-center" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
