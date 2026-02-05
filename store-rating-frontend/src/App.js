import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* PROTECTED */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="USER">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />
        <Route
          path="/store-owner"
          element={
            <ProtectedRoute role="STORE_OWNER">
              <StoreOwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
