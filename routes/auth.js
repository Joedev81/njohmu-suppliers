import express from 'express';
import fs from 'fs';
import path from 'path';
const router = express.Router();

// Path to users.json
const usersFile = path.join('data', 'users.json');

// Helper function to read users from JSON file
function getUsers() {
    const data = fs.readFileSync(usersFile, 'utf-8');
    return JSON.parse(data);
}

// Login route
router.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Save user in session
    req.session.user = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    };

    res.json({ message: "Login successful", user: req.session.user });
});

// Logout route
router.post("/api/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.clearCookie("njohmu.sid");
        res.json({ message: "Logged out successfully" });
    });
});

// Middleware: isAdmin
export function isAdmin(req, res, next) {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "Not authenticated" });
    if (!user.isAdmin) return res.status(403).json({ message: "Not authorized" });
    next();
}

export default router;
