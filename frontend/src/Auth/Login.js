import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

     const navigate = useNavigate();

  const signUp =()=>{
    navigate("/signup");
  };
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="mt-6 p-7 w-4/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <form class="max-w-sm mx-auto">
            <h3 class="mb-3 text-4xl font-extrabold text-dark-grey-900">
              Login In
            </h3>
            <hr class="h-0 border-b border-solid border-grey-500 grow" />
            <div class="mt-4 mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>

            <p class=" mt-3 text-sm leading-relaxed text-grey-900">
              Not registered yet?{" "}
              <span onClick={signUp} class="font-bold text-grey-700">
                Create an Account
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
