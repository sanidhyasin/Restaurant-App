// Menu.js
import React, { useState } from "react";
import { useMenu } from "../hooks/useMenu";
import { useOrders } from "../hooks/useOrders";
import { MenuItem } from "./MenuItem";

const Menu = () => {
  const { menuItems, categories } = useMenu();
  const { addToCart, cart, placeOrder } = useOrders();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [tableNo, setTableNo] = useState("");

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + delta, 0),
    }));
  };

  const handleAddToCart = (item) => {
    if (quantities[item.id] > 0) {
      addToCart({ ...item, quantity: quantities[item.id] });
      setQuantities((prev) => ({
        ...prev,
        [item.id]: 0,
      }));
    }
  };

  const handlePlaceOrder = () => {
    const tableNumber = parseInt(tableNo, 10);
    if (isNaN(tableNumber)) {
      alert("Please enter a valid table number.");
      return;
    }
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const itemsWithPrice = cart.map((item) => ({
      ...item,
      price: item.price,
    }));
    placeOrder(itemsWithPrice, tableNumber, totalAmount);
  };

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category.name === selectedCategory)
    : menuItems;

  // In Menu.js, add this line before the return statement
  console.log("Menu Items:", menuItems);

  return (
    <div className="flex flex-col mt-14 h-full sm:w-full w-96 pb-10">
      <div className="flex flex-row justify-between mb-6">
        <div className="flex flex-col">
          <h1 className=" text-xl sm:text-4xl font-medium">
            What would you like to order?
          </h1>
          <p className="text-gray-700 text-sm sm:text-lg">
            Discover delicious dishes from our diverse menu. Find your new
            favorite today!
          </p>
        </div>
        <div className=" pt-2">
          <label className=" hidden sm:inline text-[15px] sm:text-xl font-medium pr-2">
            Filter By Category:
          </label>
          <select
            className=" text-lg border border-black rounded-lg"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 0}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className=" flex flex-row justify-between items-center mt-6 px-8">
        <div className="mt-6">
          <label className=" text-xl font-semibold italic">
            Table Number :{" "}
          </label>
          <input
            type="text"
            value={tableNo}
            onChange={(e) => setTableNo(e.target.value)}
            className="border-2 rounded px-2 py-1"
          />
        </div>
        <div>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-xl"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
