// src/pages/admin/Payments.jsx
import { useEffect, useState } from "react";
import {
  getPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from "../../api/api";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [formData, setFormData] = useState({ method: "", amount: 0 });

  const fetchPayments = async () => {
    const data = await getPayments();
    setPayments(data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleOpenModal = (payment = null) => {
    setEditingPayment(payment);
    setFormData(payment || { method: "", amount: 0 });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingPayment) {
      await updatePayment(editingPayment._id, formData);
    } else {
      await createPayment(formData);
    }
    setModalOpen(false);
    fetchPayments();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this payment?")) {
      await deletePayment(id);
      fetchPayments();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Payments</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Payment
        </button>
      </div>

      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-2">Method</th>
            <th className="p-2">Amount (KSh)</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p._id} className="border-b">
              <td className="p-2">{p.method}</td>
              <td className="p-2">{p.amount}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleOpenModal(p)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
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
              {editingPayment ? "Edit Payment" : "Add Payment"}
            </h2>
            <input
              type="text"
              placeholder="Method"
              value={formData.method}
              onChange={(e) =>
                setFormData({ ...formData, method: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
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