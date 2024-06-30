import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const LoginPage = () => (
  <div className="bg-white h-screen flex justify-center">
    <div className="flex flex-col basis-1/2 w-full h-full items-center justify-center">
      <div className="min-h-96 min-w-80 gap-2">
        <h1 className=" text-2xl font-medium">Log In</h1>
        <p className="text-sm text-gray-400">And Indulge in food therapy</p>
        <AuthForm isLogin />
        <div className="py-2 text-sm flex justify-center">
          <div>{"Don't have an account?"}</div>
          <Link
            className="pointer underline pl-1 cursor-pointer"
            to={"/register"}
          >
            {"Sign Up"}
          </Link>
        </div>
      </div>
    </div>
    <div
      className="sm:flex hidden flex-col basis-1/2 bg-cover bg-center w-full h-full"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/X2njx43/top-view-eid-al-fitr-celebration-with-delicious-food.jpg')",
      }}
    ></div>
  </div>
);

export default LoginPage;
