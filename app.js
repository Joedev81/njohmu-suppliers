import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();

// Enable CORS for React frontend
app.use(cors({
  origin: [
    "http://localhost:5173", // React dev server // Now
    "https://njohmusuppliers.com" // Later
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session
app.use(session({
  secret: "njohmuSecretKey",
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use(authRoutes);
app.use(adminRoutes);

export default app;
