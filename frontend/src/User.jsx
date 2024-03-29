import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  // data fetching all
  const [userData, setUserData] = useState([]);
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:8000/read/${id}`);
    console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <div className="w-2/3 mx-auto mt-5 font-serif">
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-lg text-center text-gray-500 ">
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-100 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                {userData.name}
              </th>
              <td className="px-6 py-4"> {userData.email}</td>
              <td className="px-6 py-4">{userData.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
