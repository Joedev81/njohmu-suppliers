// src/api/api.js
const API_URL = "http://localhost:3000/api";

// ==========================
// AUTH
// ==========================
export async function loginUser(identifier, password) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }), // send as 'identifier'
    });
    return await res.json();
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Server error" };
  }
}

// ==========================
// PRODUCTS
// ==========================
export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createProduct = async (product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

// ==========================
// RENTALS (Orders)
// ==========================
export const getRentals = async () => {
  try {
    const res = await fetch(`${API_URL}/rentals`);
    if (!res.ok) throw new Error("Failed to fetch rentals");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createRental = async (rental) => {
  const res = await fetch(`${API_URL}/rentals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rental),
  });
  return await res.json();
};

export const updateRental = async (id, rental) => {
  const res = await fetch(`${API_URL}/rentals/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rental),
  });
  return await res.json();
};

export const deleteRental = async (id) => {
  const res = await fetch(`${API_URL}/rentals/${id}`, { method: "DELETE" });
  return await res.json();
};

// ==========================
// PAYMENTS
// ==========================
export const getPayments = async () => {
  try {
    const res = await fetch(`${API_URL}/payments`);
    if (!res.ok) throw new Error("Failed to fetch payments");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createPayment = async (payment) => {
  const res = await fetch(`${API_URL}/payments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payment),
  });
  return await res.json();
};

export const updatePayment = async (id, payment) => {
  const res = await fetch(`${API_URL}/payments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payment),
  });
  return await res.json();
};

export const deletePayment = async (id) => {
  const res = await fetch(`${API_URL}/payments/${id}`, { method: "DELETE" });
  return await res.json();
};

// ==========================
// CUSTOMERS
// ==========================
export const getCustomers = async () => {
  try {
    const res = await fetch(`${API_URL}/customers`);
    if (!res.ok) throw new Error("Failed to fetch customers");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// ==========================
// SUPPLIERS
// ==========================
export const getSuppliers = async () => {
  try {
    const res = await fetch(`${API_URL}/suppliers`);
    if (!res.ok) throw new Error("Failed to fetch suppliers");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// ==========================
// USERS (Admins/Staff)
// ==========================
export const getUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};