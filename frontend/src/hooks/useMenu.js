import { useEffect, useState } from "react";
import { getCategories, getMenuItems } from "../api/menu";
import { useAuth } from "./useAuth";

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchMenu = async () => {
      if (auth.token) {
        const items = await getMenuItems(auth.token);
        const cats = await getCategories(auth.token);
        setMenuItems(items);
        setCategories(cats);
      }
    };
    fetchMenu();
  }, [auth]);

  return { menuItems, categories };
};
