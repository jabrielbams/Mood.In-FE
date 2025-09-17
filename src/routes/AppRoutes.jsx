import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import MoodPage from "../pages/MoodPage";
import JournalingPage from "../pages/JournalingPage";
import ModulPage from "../pages/ModulPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/mood'
        element={
          <ProtectedRoute>
            <MoodPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/journaling'
        element={
          <ProtectedRoute>
            <JournalingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/modul'
        element={
          <ProtectedRoute>
            <ModulPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='*'
        element={<LoginPage />}
      />
    </Routes>
  );
}
