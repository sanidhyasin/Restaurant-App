// StaffOrder.js
import React from "react";

export const StaffOrder = ({ order, onCompleteOrder }) => {
  const fallbackImageUrl = "https://via.placeholder.com/150?text=No+Image";

  const getImageUrl = (item) => {
    if (item.image && typeof item.image === "string") {
      return item.image;
    }
    if (item.image && item.image.url) {
      return item.image.url;
    }
    if (item.imageUrl) {
      return item.imageUrl;
    }
    return fallbackImageUrl;
  };

  if (!order) {
    console.error("Order object is undefined or null");
    return null;
  }

  console.log("Rendering order:", order);

  return (
    <div className="w-full border-2 rounded-lg flex flex-col mb-6 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Order ID: {order.id || "N/A"}</h2>
        <p className="text-xl font-medium">
          Table: {order.tableNumber || "N/A"}
        </p>
      </div>
      <p className="text-xl mb-4">Status: {order.status || "N/A"}</p>
      {order.orderItems && order.orderItems.length > 0 ? (
        order.orderItems.map((item) => (
          <div key={item.id} className="flex flex-row mb-4 border-b pb-4">
            <div className="w-[100px] h-[100px] flex-shrink-0 mr-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={getImageUrl(item.menuItem)}
                alt={item.menuItem.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImageUrl;
                }}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold">
                  {item.menuItem.name || "Unnamed Item"}
                </h3>
                <p className="text-gray-600">
                  {item.menuItem.description || "No description available"}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-lg">Quantity: {item.quantity || 0}</p>
                <p className="text-lg font-medium">
                  ₹{((item.menuItem.price || 0) * 80).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg italic">No items in this order.</p>
      )}
      {order.status !== "COMPLETED" && (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 self-end"
          onClick={() => onCompleteOrder(order.id)}
        >
          Complete Order
        </button>
      )}
    </div>
  );
};
