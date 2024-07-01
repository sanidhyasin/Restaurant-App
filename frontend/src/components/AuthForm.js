import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthForm = ({ isLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const { handleLogin, handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        await handleLogin(username, password);
      } else {
        await handleRegister(username, password, role);
      }
      // history.push("/");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="rounded-lg bg-white w-80 text-center p-2 h-max px-4"
    // >
    //   <div>
    //     <label>Username</label>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   {!isLogin && (
    //     <div>
    //       <label>Role</label>
    //       <select value={role} onChange={(e) => setRole(e.target.value)}>
    //         <option value="customer">Customer</option>
    //         <option value="staff">Staff</option>
    //       </select>
    //     </div>
    //   )}
    //   <button type="submit">{isLogin ? "Login" : "Register"}</button>
    // </form>
    <div className=" flex flex-col  justify-center mt-5 gap-2">
      <div>
        <p className="text-xs font-medium text-left py-2">Username*</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Enter your username"}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        <p className=" text-xs font-medium text-left py-2">Password*</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Enter your password"}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      {!isLogin && (
        <div className=" w-full flex flex-col">
          <p className="text-xs font-medium text-left py-2">Role*</p>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="customer"
                className="form-radio text-black"
                checked={role === "customer"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="ml-2">Customer</span>
            </label>
            <label className="inline-flex items-center mt-2">
              <input
                type="radio"
                name="role"
                value="staff"
                className="form-radio text-black"
                checked={role === "staff"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="ml-2">Staff</span>
            </label>
          </div>
        </div>
      )}

      <button
        type="button"
        class=" mt-2 w-full text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={handleSubmit}
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default AuthForm;
