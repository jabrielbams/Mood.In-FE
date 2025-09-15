import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import MoodPage from "../pages/MoodPage";
import JournalingPage from "../pages/JournalingPage";
import ModulPage from "../pages/ModulPage";

export default (AppRoutes) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LoginPage />}
      />
      <Route
        path='/dashboard'
        element={<DashboardPage />}
      />
      <Route
        path='/mood'
        element={<MoodPage />}
      />
      <Route
        path='/journaling'
        element={<JournalingPage />}
      />
      <Route
        path='/modul'
        element={<ModulPage />}
      />
    </Routes>
  );
};
