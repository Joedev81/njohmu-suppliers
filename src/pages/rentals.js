// src/data/rentals.js
import excavator from "../assets/machine1.jpg";
import shovel from "../assets/machine2.jpg";
import loader from "../assets/machine3.jpg";

const rentals = [
  {
    id: 1,
    name: "Excavator CAT 320",
    image: excavator,
    description: "Reliable excavator for all types of construction projects.",
    price: "KSh 25,000/day",
    available: true
  },
  {
    id: 2,
    name: "Hydraulic Shovel Hyundai",
    image: shovel,
    description: "Efficient shovel suitable for heavy-duty digging.",
    price: "KSh 18,000/day",
    available: true
  },
  {
    id: 3,
    name: "Front Loader Komatsu",
    image: loader,
    description: "Powerful loader for moving large amounts of materials.",
    price: "KSh 22,000/day",
    available: false
  }
];

export default rentals;
