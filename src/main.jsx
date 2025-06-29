import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Home/Home";
import MenuPage from "./Pages/MenuPage/MenuPage";
import OrderPage from "./Pages/OrderPage/OrderPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home/>} />
        <Route path="menuPage" element={<MenuPage></MenuPage>} />
        <Route path="orderPage/:category" element={<OrderPage></OrderPage>} />
      </Route>
    </Routes>
  </BrowserRouter>
);