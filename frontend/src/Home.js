import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto mt-5 font-serif">
      {/* creating form */}
      <div className="mt-2 mb-5">
        <form>
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
              <tr className="border-t dark:border-gray-300">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  1
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-black"
                >
                  Alpha
                </th>
                <td className="px-6 py-4"> Alpha@gmail.com</td>
                <td className="px-6 py-4"> 123</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 justify-center">
                    <span
                      className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </span>
                    <span
                      className="font-medium text-yellow-500 hover:underline"
                    >
                      Edit
                    </span>
                    <button
                      className="font-medium text-red-500  hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>
  );
};

export default Home;
