// CurrentOrder.js
import React from "react";
import { useOrders } from "../hooks/useOrders";
import { OrderItem } from "./OrderItem";

const CurrentOrder = () => {
  const { currentOrder } = useOrders();

  return (
    <div className="flex flex-col mt-5">
      <h1 className="text-3xl font-medium mb-4">Current Order:</h1>
      {currentOrder ? (
        <>
          {currentOrder.orderItems && currentOrder.orderItems.length > 0 ? (
            <div>
              {currentOrder.orderItems.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
              <div className="mt-4 flex flex-row justify-between items-center">
                <p className="text-xl font-semibold">
                  Status: {currentOrder.status}
                </p>
                <p className="text-2xl font-bold">
                  Total: ₹
                  {(
                    currentOrder.orderItems.reduce(
                      (total, item) =>
                        total + item.menuItem.price * item.quantity,
                      0
                    ) * 80
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xl">No items in current order.</p>
          )}
        </>
      ) : (
        <h2 className="text-xl">No current order</h2>
      )}
    </div>
  );
};

export default CurrentOrder;
