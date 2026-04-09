// src/pages/admin/DashboardLayout.jsx
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiBox, FiShoppingCart, FiDollarSign, FiUsers, FiUser } from "react-icons/fi";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("njohmuUser"));

  const handleLogout = () => {
    localStorage.removeItem("njohmuToken");
    localStorage.removeItem("njohmuUser");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          {!collapsed && <h2 className="text-xl font-bold">Njohmu Admin</h2>}
          <button onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/admin"
            end
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiBox /> {!collapsed && "Dashboard"}
          </NavLink>
          <NavLink
            to="/admin/products"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiBox /> {!collapsed && "Products"}
          </NavLink>
          <NavLink
            to="/admin/rentals"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiShoppingCart /> {!collapsed && "Rentals"}
          </NavLink>
          <NavLink
            to="/admin/payments"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiDollarSign /> {!collapsed && "Payments"}
          </NavLink>
          <NavLink
            to="/admin/users"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiUsers /> {!collapsed && "Users"}
          </NavLink>
          <NavLink
            to="/admin/customers"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <FiUser /> {!collapsed && "Customers"}
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="font-semibold">{user?.username || "Admin"}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Outlet renders Dashboard, Customers, Products, etc. */}
        <Outlet />
      </main>
    </div>
  );
}