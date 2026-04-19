import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const LandingPage = lazy(() => import("../Pages/LandingPage"));
const AdminPage = lazy(() => import("../Pages/AdminPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center font-body text-on-surface-variant">
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/admin"
            element={<Navigate to="/control-center" replace />}
          />
          <Route path="/control-center" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
