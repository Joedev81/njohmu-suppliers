import express from 'express';
import { isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin dashboard - return JSON instead of HTML
router.get('/api/admin', isAdmin, (req, res) => {
    res.json({
        message: `Welcome, ${req.session.user.email}!`,
        stats: {
            products: 120,
            orders: 86,
            users: 12
        }
    });
});

// Example: manage users page - return JSON
router.get('/api/admin/users', isAdmin, (req, res) => {
    res.json({
        message: "Manage users endpoint (coming soon)"
    });
});

export default router;
