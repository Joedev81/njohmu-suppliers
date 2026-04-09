// src/pages/admin/Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import { getProducts, getRentals, getPayments, getCustomers } from "../../api/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [payments, setPayments] = useState([]);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
      setRentals(await getRentals());
      setPayments(await getPayments());
      setCustomers(await getCustomers());
    };
    fetchData();
  }, []);

  // Prepare chart data
  const labels = ["Customers", "Products", "Rentals", "Payments"];
  const counts = [
    customers.length,
    products.length,
    rentals.length,
    payments.length,
  ];

  const barData = {
    labels,
    datasets: [
      {
        label: "Total Count",
        data: counts,
        backgroundColor: ["#4ADE80", "#60A5FA", "#FBBF24", "#F87171"],
      },
    ],
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Growth Trend",
        data: counts,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.4)",
      },
    ],
  };

  // Card click handler
  const handleCardClick = (type) => {
    switch (type) {
      case "Customers":
        navigate("/admin/customers");
        break;
      case "Products":
        navigate("/admin/products");
        break;
      case "Rentals":
        navigate("/admin/rentals");
        break;
      case "Payments":
        navigate("/admin/payments");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          className="bg-white p-6 rounded-xl shadow border cursor-pointer hover:shadow-lg transition"
          onClick={() => handleCardClick("Products")}
        >
          <h2 className="text-sm text-gray-500 uppercase">Products</h2>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow border cursor-pointer hover:shadow-lg transition"
          onClick={() => handleCardClick("Rentals")}
        >
          <h2 className="text-sm text-gray-500 uppercase">Rentals</h2>
          <p className="text-3xl font-bold">{rentals.length}</p>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow border cursor-pointer hover:shadow-lg transition"
          onClick={() => handleCardClick("Customers")}
        >
          <h2 className="text-sm text-gray-500 uppercase">Customers</h2>
          <p className="text-3xl font-bold">{customers.length}</p>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow border cursor-pointer hover:shadow-lg transition"
          onClick={() => handleCardClick("Payments")}
        >
          <h2 className="text-sm text-gray-500 uppercase">Payments</h2>
          <p className="text-3xl font-bold">{payments.length}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-semibold mb-2">Totals Bar Chart</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-semibold mb-2">Totals Line Chart</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}