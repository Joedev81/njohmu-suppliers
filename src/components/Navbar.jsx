import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-full px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left: Logo + Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo/njo.png"
              alt="Njohmu Suppliers Logo"
              className="h-16 w-auto object-contain sm:h-20"
            />
            <span className="text-xl sm:text-2xl font-extrabold text-green-500 tracking-wide whitespace-nowrap">
              NJOHMU SUPPLIERS LIMITED
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-base text-gray-200">

            <Link to="/" className="hover:text-green-400 transition-colors duration-300 font-medium">Home</Link>
            <Link to="/shop" className="hover:text-green-400 transition-colors duration-300 font-medium">Shop</Link>
            <Link to="/blog" className="hover:text-green-400 transition-colors duration-300 font-medium">Blogs</Link>
            <Link to="/about" className="hover:text-green-400 transition-colors duration-300 font-medium">About Us</Link>
            <Link to="/contact" className="hover:text-green-400 transition-colors duration-300 font-medium">Contact Us</Link>

            {!user && (
              <Link
                to="/login"
                className="ml-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm font-semibold transition-colors duration-300 shadow-md"
              >
                Login
              </Link>
            )}

            {user && (
              <button
                onClick={handleLogout}
                className="ml-3 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-semibold transition-colors duration-300 shadow-md"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-gray-200 hover:text-green-400 transition-colors duration-300 font-medium">Home</Link>
          <Link to="/shop" className="block text-gray-200 hover:text-green-400 transition-colors duration-300 font-medium">Shop</Link>
          <Link to="/blog" className="block text-gray-200 hover:text-green-400 transition-colors duration-300 font-medium">Blogs</Link>
          <Link to="/about" className="block text-gray-200 hover:text-green-400 transition-colors duration-300 font-medium">About Us</Link>
          <Link to="/contact" className="block text-gray-200 hover:text-green-400 transition-colors duration-300 font-medium">Contact Us</Link>

          {!user && (
            <Link
              to="/login"
              className="block w-full text-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm font-semibold transition-colors duration-300 shadow-md"
            >
              Login
            </Link>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="block w-full text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-semibold transition-colors duration-300 shadow-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}