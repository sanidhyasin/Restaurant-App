import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import { useAuth } from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StaffOrdersPage from "./pages/StaffOrdersPage";
import PrivateRoute from "./components/PrivateRoute";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import NavBar from "./components/Navbar";
import { CartPage } from "./pages/CartPage";

const AppContent = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div>
      {!isHomePage && <NavBar />}
      <Routes>
        <Route path="/" element={auth.token ? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {auth.role === "staff" ? (
          <Route
            path="/staff-orders"
            element={
              <PrivateRoute roles={["staff"]}>
                <StaffOrdersPage />
              </PrivateRoute>
            }
          />
        ) : (
          <>
            <Route
              path="/menu"
              element={
                <PrivateRoute roles={["customer"]}>
                  <MenuPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute roles={["customer"]}>
                  <OrderPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute roles={["customer"]}>
                  <CartPage />
                </PrivateRoute>
              }
            />
          </>
        )}

        <Route
          path="*"
          element={
            auth.role === "staff" ? (
              <Navigate to="/staff-orders" replace />
            ) : (
              <Navigate to="/menu" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
