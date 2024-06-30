import React, { useState, useEffect } from "react";
import { useOrders } from "../hooks/useOrders";
import { StaffOrder } from "./StaffOrder";

const IncomingOrders = () => {
  const { incomingOrders, completeOrderById } = useOrders();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (incomingOrders !== undefined) {
      setIsLoading(false);
    }
  }, [incomingOrders]);

  const pendingOrders = incomingOrders.filter(
    (order) => order.status !== "COMPLETED"
  );
  const completedOrders = incomingOrders.filter(
    (order) => order.status === "COMPLETED"
  );

  if (isLoading) {
    return <div className="text-xl">Loading orders...</div>;
  }

  return (
    <div className="flex flex-col mt-5 mb-10">
      <h2 className="text-3xl font-medium mb-4">Pending Orders</h2>
      {pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <StaffOrder
            key={order.id}
            order={order}
            onCompleteOrder={completeOrderById}
          />
        ))
      ) : (
        <p className="text-xl">No pending orders at the moment.</p>
      )}
    </div>
  );
};

export default IncomingOrders;
