// OrderItem.js
import React from "react";

export const OrderItem = ({ item }) => {
  const fallbackImageUrl = "https://via.placeholder.com/150?text=No+Image";

  const getImageUrl = (item) => {
    if (item.menuItem.image && typeof item.menuItem.image === "string") {
      return item.menuItem.image;
    }
    if (item.menuItem.image && item.menuItem.image.url) {
      return item.menuItem.image.url;
    }
    if (item.menuItem.imageUrl) {
      return item.menuItem.imageUrl;
    }
    return fallbackImageUrl;
  };

  const imageUrl = getImageUrl(item);

  return (
    <div className="w-full sm:h-[150px] h-[300px] border-2 rounded-lg flex flex-col sm:flex-row mb-4">
      <div className="sm:w-[150px] w-full h-[150px] sm:h-full flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-l-lg"
          src={imageUrl}
          alt={item.menuItem.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImageUrl;
          }}
        />
      </div>
      <div className="flex flex-row justify-between w-full px-2 sm:px-8 py-4 overflow-hidden">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold sm:truncate">
              {item.menuItem.name}
            </h1>
            <p className="text-lg text-slate-500 line-clamp-2">
              {item.menuItem.description}
            </p>
          </div>
          <div>
            <h1 className="text-xl italic text-slate-700">
              ₹{(item.menuItem.price * 80).toFixed(2)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ml-4">
          <div className="sm:text-xl text-lg font-medium sm:font-semibold">
            Quantity: {item.quantity}
          </div>
          <div className="text-xl font-semibold mt-2">
            Total: ₹{(item.menuItem.price * item.quantity * 80).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
