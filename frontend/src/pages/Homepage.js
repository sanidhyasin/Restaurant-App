import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavBar from "../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { Offers } from "../components/Offers";
import Menu from "../components/Menu";
import StaffOrdersPage from "./StaffOrdersPage";

const HomePage = () => {
  const { auth } = useAuth();

  return (
    <div className="flex flex-col w-full h-full pb-10 overflow-x-hidden items-center justify-center">
      <NavBar isHomepage />
      <div
        className="bg-center bg-cover h-screen sm:h-[550px] w-full flex flex-col items-center justify-center opacity-100"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/vkjy7hT/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg')",
        }}
      >
        {auth.role === "customer" ? (
          <div className="flex flex-col items-center justify-center gap-12 w-full h-full backdrop-blur-sm">
            <div className="flex flex-col gap-2 items-center justify-center w-full px-4 text-center">
              <h1 className="sm:text-7xl text-4xl italic font-bold text-white">
                Welcome Customer
              </h1>
              <h2 className="sm:text-xl text-base font-medium text-white max-w-3xl">
                Experience Unforgettable Flavors and Timeless Elegance at Ivorry
              </h2>
            </div>
            <div className="flex flex-row w-fit bg-white px-4 py-2 rounded-xl gap-2 items-center shadow-xl">
              <CiSearch className="text-2xl" />
              <input
                type="text"
                className="border-none outline-none w-60 sm:w-96 h-10"
                placeholder="Search for cuisine or a dish..."
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center sm:text-7xl text-5xl italic font-bold text-white backdrop-blur-sm w-full h-full">
            Welcome Staff
            <p className=" sm:hidden sm:text-2xl text-xl not-italic font-normal mt-5">
              Check out incoming orders below.
            </p>
          </div>
        )}
      </div>
      {auth.role === "staff" ? (
        <div className=" w-96 sm:w-full h-full  mt-10">
          <StaffOrdersPage />
        </div>
      ) : (
        <div className=" px-6 sm:px-60 mt-10">
          <Offers />
          <Menu />
        </div>
      )}
    </div>
  );
};

export default HomePage;
