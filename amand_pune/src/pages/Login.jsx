import React, { useState } from "react";
import axios from "axios";
import AdminPage from "./AdminPage";
import Breadcrumb from "../components/Breadcrumb";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  
   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin", { username, password });
      if (response.status === 200) {
        setIsAuthenticated(true); 
      }
    } catch (error) {
      setError("Incorrect username or password"); 
    }
  };

  if (isAuthenticated) {
    return <AdminPage />; 
  }

  return (
    <div className="bg-bgColor min-h-screen flex flex-col md:gap-[2rem] py-[2rem] px-[4rem] items-center">
        <Breadcrumb />
      <h2 className="text-2xl font-semibold mb-6 text-green-900">ADMIN LOGIN</h2>
      <form onSubmit={handleLogin} className="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
