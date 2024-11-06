import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/getUsers"); 
        setUsers(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers();
  }, []);
  
  const handleClick = async (name, membershipType, date) => {
    try {
      const response = await axios.post('/api/delete', {
        name,
        membershipType,
        date
      });
      if(response.status === 200) {
        setUsers(users.filter(user => !(user.name === name && user.membershipType === membershipType && user.date === date)));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="bg-bgColor min-h-screen flex flex-col md:gap-[2rem] py-[2rem] px-[4rem] items-center">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mt-4">Users Who Have Joined Amand Pune</h1>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[80%] md:max-w-[60%] mt-4">
          {users.length > 0 ? (
            users.map((user) => (
              <div
                key={user._id} 
                className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold">Name: {user.name}</h3>
                <h5 className="text-md">Membership Type: {user.membershipType}</h5>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Joined on: {new Date(user.date).toLocaleDateString("en-US", options)}</p>
                <button 
                  onClick={() => handleClick(user.name, user.membershipType, user.date)} 
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete User
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
