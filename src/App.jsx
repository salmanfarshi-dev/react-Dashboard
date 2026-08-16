import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router";
import RootLayout from "./Components/RootLayout";
import Desboard from "./Pages/Desboard";
import Order from "./Pages/Order";
import Products from "./Pages/Products";
import Profile from "./Pages/Profile";
import SelasReport from "./Pages/SelasReport";

function App() {
  const [isopen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isopen);
  return (
    <div className="bg-primary1">
      <div className="container bg-primary1 flex mx-auto min-h-screen">
        <div
          className={`md:hidden fixed top-0 left-0 z-50 h-screen transition-transform duration-200 ${
            isopen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>

        <Routes>
          <Route
            path="/"
            element={<RootLayout toggleSidebar={toggleSidebar} />}
          >
            <Route path="/" index element={<Desboard />} />
            <Route path="order" element={<Order />} />
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<Profile />} />
            <Route path="selasReport" element={<SelasReport />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
