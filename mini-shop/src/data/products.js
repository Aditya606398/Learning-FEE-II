// Sample products. Images come from placehold.co (colored placeholders).
// Replace the image URLs with your own pictures if you like.
const img = (text, color) =>
  `https://placehold.co/300x200/${color}/ffffff?text=${encodeURIComponent(text)}`;

const products = [
  { id: 1, name: "Wireless Headphones", price: 1999, image: img("Headphones", "4f46e5") },
  { id: 2, name: "Smart Watch", price: 2999, image: img("Smart Watch", "0891b2") },
  { id: 3, name: "Backpack", price: 1299, image: img("Backpack", "059669") },
  { id: 4, name: "Water Bottle", price: 399, image: img("Water Bottle", "d97706") },
  { id: 5, name: "Running Shoes", price: 2499, image: img("Shoes", "dc2626") },
  { id: 6, name: "Sunglasses", price: 899, image: img("Sunglasses", "7c3aed") },
  { id: 7, name: "Desk Lamp", price: 749, image: img("Desk Lamp", "db2777") },
  { id: 8, name: "Bluetooth Speaker", price: 1599, image: img("Speaker", "475569") },
];

export default products;
