import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Home/Home";
import MenuPage from "./Pages/MenuPage/MenuPage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import Login from "./Pages/Authentication/Login/login";
import AuthProviders from "./Components/Providers/AuthProviders";
import Register from "./Pages/Authentication/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProviders>
       <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home/>} />
        <Route path="menuPage" element={<MenuPage></MenuPage>} />
        <Route path="orderPage/:category" element={<PrivateRoute><OrderPage></OrderPage></PrivateRoute>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Route>
    </Routes>
    </AuthProviders>
  </BrowserRouter>
);