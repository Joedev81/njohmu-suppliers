import React from "react";
import rentals from "../data/rentals";

const Rentals = () => {
  return (
    <div className="bg-white text-gray-800 py-12">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Equipment Rentals
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {rentals.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-green-600 font-bold mb-4">{item.price}</p>
              <button
                disabled={!item.available}
                className={`w-full py-2 rounded-lg font-semibold text-white ${
                  item.available ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                } transition duration-300`}
              >
                {item.available ? "Rent Now" : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rentals;
