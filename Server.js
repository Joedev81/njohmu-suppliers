import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();

// Enable CORS for React frontend
app.use(cors({
    origin: "http://localhost:5173", // React dev server
    credentials: true
}));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session
app.use(session({
    name: "njohmu.sid",
    secret: "njohmuSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// Routes
app.use(authRoutes);
app.use(adminRoutes);

// Simple test route
app.get("/", (req, res) => {
    res.json({ message: "Backend server running!" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
