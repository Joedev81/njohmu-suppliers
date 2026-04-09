// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please enter username/email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT and user info
      localStorage.setItem("njohmuToken", data.token);
      localStorage.setItem("njohmuUser", JSON.stringify(data.user));

      navigate("/admin"); // redirect to dashboard
    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-900"
      style={{
        backgroundImage: "url('/login/login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30"
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center tracking-wider">
          WELCOME TO NJOHMU
        </h2>

        {error && (
          <p className="text-red-400 bg-red-900/40 p-2 rounded mb-4 text-center font-semibold">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-3 rounded-lg border border-white/50 bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border border-white/50 bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-xl shadow-md transition transform hover:scale-105"
        >
          Login
        </button>

        <p className="mt-4 text-center text-white/80 text-sm">
          Don't have an account?{" "}
          <span className="underline cursor-pointer">Contact Admin</span>
        </p>
      </form>
    </div>
  );
}