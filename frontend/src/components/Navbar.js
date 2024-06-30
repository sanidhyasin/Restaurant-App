// src/components/NavBar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaUserCircle, FaChevronDown, FaShoppingCart } from "react-icons/fa";

const NavBar = ({ isHomepage }) => {
  const [open, isOpen] = useState(false);
  const { auth, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <nav className={isHomepage ? "absolute top-0 left-0 right-0 z-10" : ""}>
      {auth.token ? (
        <div
          className={`flex flex-row sm:px-60 px-6 py-4 w-full h-14 ${
            isHomepage ? "bg-transparent text-white" : "bg-white text-black"
          } justify-between items-center ${
            !isHomepage && "border-b shadow-xl"
          }`}
        >
          <div className="flex items-center justify-center">
            <Link className="hover:underline" to="/">
              <h1 className="text-3xl font-semibold">Ivorry</h1>
            </Link>
          </div>

          {auth.role === "staff" ? (
            <div className="text-2xl font-medium">
              <button className="hover:underline " onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row gap-4 items-center justify-center">
              <Link to={"/cart"}>
                <button className="flex items-center justify-center gap-1">
                  <FaShoppingCart className=" text-xl sm:text-4xl" />
                  <p className=" text-sm sm:text-xl">Cart</p>
                </button>
              </Link>
              <button
                className="flex flex-row items-center justify-center gap-1"
                onClick={() => isOpen(!open)}
              >
                <div className=" text-xl sm:text-4xl">
                  <FaUserCircle />
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                  <p className="capitalize text-base sm:text-xl">{auth.role}</p>
                  <FaChevronDown className="text-sm mt-1" />
                </div>
              </button>
            </div>
          )}
        </div>
      ) : null}

      <div
        className={`${
          open ? "flex" : "hidden"
        } w-fit h-fit z-20 bg-white text-black flex-col absolute sm:top-16 top-12 right-6 sm:right-60 px-3 py-2 border rounded-xl shadow-2xl`}
      >
        <ul className="flex flex-col gap-2 font-normal text-lg">
          <li>
            <Link className=" hover:underline" to="/orders">
              Current Order
            </Link>
          </li>
          <li>
            <Link className=" hover:underline" to="/orders">
              Order History
            </Link>
          </li>
          <li>
            <Link className=" hover:underline" to="/">
              Setting
            </Link>
          </li>
          <li>
            <Link className=" hover:underline" to="/">
              Reviews
            </Link>
          </li>
          <li>
            <button
              className=" hover:underline"
              onClick={() => {
                onLogout();
                isOpen(!open);
              }}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
