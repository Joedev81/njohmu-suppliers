import React from "react";

const machines = [
  {
    id: 1,
    name: "Excavator",
    price: "45,000 KES",
    image: "/machines/excavator.jpg",
    whatsapp: "https://wa.me/254720839534?text=Hi! I'm interested in the Njohmu Excavator.",
  },
  {
    id: 2,
    name: "Shovel",
    price: "40,000 KES",
    image: "/machines/Shovel.jpg",
    whatsapp: "https://wa.me/254720839534?text=Hi! I'm interested in the Njohmu Shovel.",
  },
  {
    id: 3,
    name: "Truck",
    price: "35,000 KES",
    image: "/machines/Lorry.jpg",
    whatsapp: "https://wa.me/254720839534?text=Hi! I'm interested in the Njohmu Lorry(materials).",
  },
  {
    id: 4,
    name: "Roller",
    price: "27,000 KES",
    image: "/machines/Roller.jpg",
    whattsapp: "https://wa.me/254720839534?text=Hi! I'm interested in the Njohmu Roller.",
  },
];

const Shop = () => {
  return (
    <div className="shop-container bg-green-50 min-h-screen p-10">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Our Machines
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition"
          >
            <img
              src={machine.image}
              alt={machine.name}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">{machine.name}</h3>
            <p className="text-gray-600 mb-4">{machine.price}</p>
            <a
              href={machine.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;