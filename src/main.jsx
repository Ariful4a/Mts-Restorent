import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Home/Home";
import MenuPage from "./Pages/MenuPage/MenuPage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import Login from "./Pages/Authentication/Login/login";
import AuthProviders from "./Components/Providers/AuthProviders";
import Register from "./Pages/Authentication/Register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./Pages/Dashboard/Cart/Cart";
import Dashboard from "./MainLayout/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllUsers from "./Pages/Dashboard/Allusers/AllUsers";
import AdminRoute from "./Components/PrivateRoute/adminRoutes";
import AddItems from "./Pages/Dashboard/AddItems/AddItems";
import ManageItems from "./Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "./Pages/Dashboard/UpdateItem/UpdateItem";

const queryClient = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
            <Route index element={<Home />} />
            <Route path="menuPage" element={<MenuPage></MenuPage>} />
            <Route
              path="orderPage/:category"
              element={<OrderPage></OrderPage>}
            />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Route>
          {/* Dashboard  */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route path="cart" element={<Cart/>} />
            {/* Admin routes  */}
            <Route path="allUsers" element={<AdminRoute><AllUsers></AllUsers></AdminRoute>} />
            <Route path="addItems" element={<AdminRoute><AddItems></AddItems  ></AdminRoute>} />
            <Route path="manageItems" element={<AdminRoute><ManageItems></ManageItems></AdminRoute>} />
            <Route path="updateItem/:id" element={<AdminRoute><UpdateItem></UpdateItem></AdminRoute>} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </AuthProviders>
  </BrowserRouter>
);
