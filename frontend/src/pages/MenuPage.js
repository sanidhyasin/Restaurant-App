import React from "react";
import Menu from "../components/Menu";

const MenuPage = () => (
  <div className="flex flex-col px-6 sm:px-60 py-6 items-center justify-center">
    <h1 className="self-start text-5xl font-medium">Menu</h1>
    <Menu />
  </div>
);

export default MenuPage;
