import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-blue-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <img src="travel.png" alt="logo" width="80" height="80" />
          <div className="flex md:order-2 justify-end">
            <div className="hidden relative mr-3 md:mr-0 md:block">
              <input
                type="text"
                id="email-adress-icon"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-white sm:text-sm  dark:bg-blue-600 dark:border-white dark:placeholder-gray-400 dark:text-white "
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
