// src/pages/admin/Rentals.jsx
import { useEffect, useState } from "react";
import {
  getRentals,
  createRental,
  updateRental,
  deleteRental,
} from "../../api/api";

export default function Rentals() {
  const [rentals, setRentals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRental, setEditingRental] = useState(null);
  const [formData, setFormData] = useState({
    product: "",
    customer: "",
    quantity: 1,
  });

  const fetchRentals = async () => {
    const data = await getRentals();
    setRentals(data);
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  const handleOpenModal = (rental = null) => {
    setEditingRental(rental);
    setFormData(
      rental || {
        product: "",
        customer: "",
        quantity: 1,
      }
    );
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingRental) {
      await updateRental(editingRental._id, formData);
    } else {
      await createRental(formData);
    }
    setModalOpen(false);
    fetchRentals();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this rental?")) {
      await deleteRental(id);
      fetchRentals();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Rentals</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Rental
        </button>
      </div>

      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((r) => (
            <tr key={r._id} className="border-b">
              <td className="p-2">{r.product}</td>
              <td className="p-2">{r.customer}</td>
              <td className="p-2">{r.quantity}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleOpenModal(r)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(r._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow w-96"
          >
            <h2 className="text-xl font-bold mb-4">
              {editingRental ? "Edit Rental" : "Add Rental"}
            </h2>
            <input
              type="text"
              placeholder="Product"
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              placeholder="Customer"
              value={formData.customer}
              onChange={(e) =>
                setFormData({ ...formData, customer: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
              required
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}