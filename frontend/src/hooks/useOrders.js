import { useCallback, useEffect, useState } from "react";
import {
  createOrder,
  getCurrentOrder,
  getOrderHistory,
  getIncomingOrders,
  completeOrder,
} from "../api/order";
import { useAuth } from "./useAuth";

export const useOrders = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [incomingOrders, setIncomingOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const { auth } = useAuth();

  // const fetchIncomingOrders = useCallback(async () => {
  //   if (auth.token && auth.role === "staff") {
  //     try {
  //       const data = await getIncomingOrders(auth.token);
  //       setIncomingOrders(data);
  //     } catch (error) {
  //       console.error("Failed to fetch incoming orders:", error);
  //     }
  //   }
  // }, [auth.token, auth.role]);

  useEffect(() => {
    const fetchCurrentOrder = async () => {
      if (auth.token && auth.role === "customer") {
        const data = await getCurrentOrder(auth.token);
        setCurrentOrder(data);
      }
    };

    const fetchOrderHistory = async () => {
      if (auth.token && auth.role === "customer") {
        const data = await getOrderHistory(auth.token);
        setOrderHistory(data);
      }
    };

    const fetchIncomingOrders = async () => {
      if (auth.token && auth.role === "staff") {
        const data = await getIncomingOrders(auth.token);
        setIncomingOrders(data);
      }
    };

    if (auth.token) {
      if (auth.role === "customer") {
        fetchCurrentOrder();
        fetchOrderHistory();
      }
      if (auth.role === "staff") {
        fetchIncomingOrders();
      }
    }
  }, [auth]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const placeOrder = async (orderItems, tableNumber, totalAmount) => {
    if (auth.token && auth.role === "customer") {
      const order = {
        tableNumber,
        totalAmount,
        items: orderItems.map((item) => ({
          menuItemId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      const data = await createOrder(auth.token, order);
      setCurrentOrder(data);
      setCart([]);
    }
  };

  // const completeOrderById = async (orderId) => {
  //   if (auth.token && auth.role === "staff") {
  //     try {
  //       const completedOrder = await completeOrder(auth.token, orderId);
  //       setIncomingOrders((prevOrders) =>
  //         prevOrders.map((order) =>
  //           order.id === orderId ? { ...order, status: "COMPLETED" } : order
  //         )
  //       );

  //       // Refresh the incoming orders list
  //       await fetchIncomingOrders();
  //     } catch (error) {
  //       console.error("Failed to complete order:", error);
  //     }
  //   }
  // };

  const completeOrderById = async (orderId) => {
    if (auth.token && auth.role === "staff") {
      await completeOrder(auth.token, orderId);
      const updatedOrders = await getIncomingOrders(auth.token);
      setIncomingOrders(updatedOrders);
    }
  };

  return {
    currentOrder,
    orderHistory,
    incomingOrders,
    cart,
    addToCart,
    placeOrder,
    completeOrderById,
  };
};
