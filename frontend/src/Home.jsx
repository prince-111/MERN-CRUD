import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the data to the server
      const res = await axios.post(
        "http://localhost:8000/createuser",
        inputUser
      );
      console.log(res);

      // Reset the form fields to their initial state
      setInputUser({
        name: "",
        email: "",
        password: "",
      });

      // Fetch the updated user data
      fetchAllUser();
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle the error as needed
    }
  };

  // data fetching all
  const [userData, setUserData] = useState([]);
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8000/readalluser");
    console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8000/delete/${id}`);
    if (res.status === 200) {
      fetchAllUser();
    }
  };
  return (
    <div className="w-2/3 mx-auto mt-5 font-serif">
      {/* creating form */}
      <div className="mt-2 mb-5">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-lg font-bold">Create New User</h1>
          <div className="ms-20 me-20">
            <div className="mt-1">
              <label className="text-gray-800 text-lg font-bold ">Name</label>
              <input
                type="text"
                name="name"
                className="block py-2.5 px-3 w-full text-md text-gray-900 bg-transparent  border-2 border-gray-300"
                placeholder="Enter Your name"
                required
                value={inputUser.name}
                onChange={handleChnage}
              />
            
            </div>
            <div className="mt-3">
              <label className=" text-gray-800 text-md font-bold  ">Email</label>
              <input
                type="text"
                name="email"
                className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
                placeholder="Enter Your email "
                required
                value={inputUser.email}
                onChange={handleChnage}
              />
            </div>

            <div className="mt-3">
              <label className="text-gray-800 text-md font-bold ">Password</label>
              <input
                type="password"
                name="password"
                className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
                placeholder="Enter Your Password "
                required
                value={inputUser.password}
                onChange={handleChnage}
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button type="submit" className="px-4 py-2 bg-green-400 rounded-lg">
              Add User
            </button>
          </div>
        </form>
      </div>

      <div className="mb-8 relative overflow-x-auto rounded-lg">
        <table className="w-full text-lg text-center text-gray-500">
          <thead className="text-[17px] text-gray-600 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, i) => (
              <tr
                className={`${
                  i % 2 === 0 ? "bg-gray-100" : "bg-gray-200" // Apply different background colors based on the row index
                } border-t dark:border-gray-300`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-black"
                >
                  {user?.name}
                </th>
                <td className="px-6 py-4"> {user?.email}</td>
                <td className="px-6 py-4"> {user?.password}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 justify-center">
                    <NavLink
                      to={`/readuser/${user._id}`}
                      className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </NavLink>
                    <NavLink
                      to={`/updateuser/${user._id}`}
                      className="font-medium text-yellow-500 hover:underline"
                    >
                      Edit
                    </NavLink>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="font-medium text-red-500  hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
