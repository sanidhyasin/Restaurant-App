import React from "react";
import { useOrders } from "../hooks/useOrders";
import { OrderItem } from "./OrderItem";

const OrderHistory = () => {
  const { orderHistory } = useOrders();

  return (
    <div className="flex flex-col mt-5">
      <h2 className="text-3xl font-medium mb-4">Order History</h2>
      {orderHistory.length > 0 ? (
        <div>
          {orderHistory.map((order) => (
            <div key={order.id} className="mb-8 border-2 rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-2">
                Order ID: {order.id}
              </h3>
              {/* <p className="text-lg mb-1">
                Date: {new Date(order.createdAt).toLocaleString()}
              </p> */}
              <p className="text-lg mb-3 font-medium">Status: {order.status}</p>
              {order.orderItems && order.orderItems.length > 0 ? (
                <div>
                  {order.orderItems.map((item) => (
                    <OrderItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-lg italic">No items in this order.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-xl">You haven't placed any order yet.</h2>
      )}
    </div>
  );
};

export default OrderHistory;
