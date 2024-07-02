// Cart.js
import React, { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import { MenuItem } from "./MenuItem";

const Cart = () => {
  const { cart, updateCartItemQuantity, placeOrder } = useOrders();
  const [tableNo, setTableNo] = useState("");

  const handleQuantityChange = (id, delta) => {
    updateCartItemQuantity(id, delta);
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
    placeOrder(cart, tableNumber, totalAmount);
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col mt-14 h-full sm:w-full w-96 pb-10 px-8 sm:px-0">
      <h1 className="text-xl sm:text-4xl font-medium mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">
          Your cart is empty. Add some items to place an order!
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                quantity={item.quantity}
                onQuantityChange={handleQuantityChange}
                isCartItem={true}
              />
            ))}
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center mt-6 sm:px-8">
            <div className="flex sm:flex-row flex-col mt-6">
              <label className="text-xl font-semibold italic">
                Table Number:{" "}
              </label>
              <input
                type="text"
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
                className="border-2 rounded px-2 py-1"
              />
            </div>
            <div className="text-xl font-semibold mt-4">
              Total: ₹{(totalAmount * 80).toFixed(2)}
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
        </>
      )}
    </div>
  );
};

export default Cart;
