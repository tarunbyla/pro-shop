import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import store from "./store";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PrivateRoutes from "./components/PrivateRoutes";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrder from "./pages/PlaceOrder";
import OrderPage from "./pages/OrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminRoutes from "./components/AdminRoutes";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import EditUsers from "./pages/admin/EditUsers";
import EditProduct from "./pages/admin/EditProduct";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomePage />} />
      <Route path="/page/:pageNumber" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/orders/:id" element={<OrderPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Route>
      <Route path="" element={<AdminRoutes />}>
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route
          path="/admin/products/page/:pageNumber"
          element={<AdminProductsPage />}
        />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/users/:id/edit" element={<EditUsers />} />
        <Route path="/admin/products/:id/edit" element={<EditProduct />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
