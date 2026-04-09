import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getProducts, addProduct } from "../api/api"; // your API helper

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [activeTab, setActiveTab] = useState("Dashboard"); // new state for active tab

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!token || !user) navigate("/login");
  }, [token, user, navigate]);

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "Products") fetchProducts();
  }, [activeTab]);

  // Handle adding a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await addProduct(
        { 
          ...newProduct, 
          price: Number(newProduct.price), 
          quantity: Number(newProduct.quantity) 
        },
        token
      );

      if (data.error) {
        setError(data.error);
      } else {
        setProducts((prev) => [...prev, data]);
        setNewProduct({ name: "", description: "", category: "", price: "", quantity: "" });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user)
    return <p className="text-center mt-20 text-red-500">Not logged in</p>;

  // Sidebar items
  const sidebarItems = ["Dashboard", "Products", "Equipment", "Orders", "Payments"];

  // Dynamic content
  const renderContent = () => {
    switch(activeTab) {
      case "Dashboard":
        return <p className="text-gray-600 text-xl">Welcome to the dashboard. Use the sidebar to manage products, equipment, orders, and payments.</p>;
      case "Products":
        return (
          <>
            {/* Add Product Form */}
            <form
              onSubmit={handleAddProduct}
              className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto mb-10 border border-gray-200"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Product</h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}

              {["name","description","category","price","quantity"].map((field) => (
                <input
                  key={field}
                  type={field === "price" || field === "quantity" ? "number" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={newProduct[field]}
                  onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              ))}

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </form>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading && <p className="text-gray-500">Loading products...</p>}
              {products.map((product) => (
                <div
                  key={product.id || product.name}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-1">{product.description}</p>
                  <p className="text-gray-500 mb-1">Category: {product.category}</p>
                  <p className="text-gray-500 mb-1">Price: ${product.price}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
              ))}
            </div>
          </>
        );
      case "Equipment":
        return <p className="text-gray-600 text-xl">Equipment management coming soon...</p>;
      case "Orders":
        return <p className="text-gray-600 text-xl">Orders management coming soon...</p>;
      case "Payments":
        return <p className="text-gray-600 text-xl">Payments management coming soon...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Njohmu's Admin</h2>
        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left block py-2 px-4 rounded transition
                ${activeTab === item
                  ? "bg-green-500 text-white font-semibold"
                  : "hover:bg-gray-800 text-gray-200"}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Welcome, Njohmu's Admin
        </h1>
        {renderContent()}
      </main>
    </div>
  );
}