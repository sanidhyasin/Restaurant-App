import React from "react";
import CurrentOrder from "../components/CurrentOrder";
import OrderHistory from "../components/OrderHistory";

const OrderPage = () => (
  <div className=" flex flex-col px-6 sm:px-60 mt-10 w-full   justify-center">
    <h1 className=" text-4xl font-medium">Your Orders:</h1>
    <CurrentOrder />
    <OrderHistory />
  </div>
);

export default OrderPage;
