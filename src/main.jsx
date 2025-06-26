import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Home/Home";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home/>} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);