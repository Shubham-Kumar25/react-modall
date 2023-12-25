// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLock,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="p-4 font-semibold text-gray-800 bg-gradient-to-r from-blue-200 to-indigo-200">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            className="mr-2 shadow-outline"
          />
          <span className="font-semibold text-gradient">Home</span>
        </div>
        <div className="flex items-center space-x-8">
          <a
            href="/change-password"
            className="flex items-center transition duration-300 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon
              icon={faLock}
              size="lg"
              className="shadow-outline"
            />
            <span className="ml-1 shadow-outline text-gradient">
              Change Password
            </span>
          </a>
          <a
            href="/licenses"
            className="transition duration-300 ease-in-out shadow-outline hover:text-gray-600"
          >
            Licenses
          </a>
          <a
            href="/logout"
            className="flex items-center transition duration-300 ease-in-out hover:text-gray-600"
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="lg"
              className="shadow-outline"
            />
            <span className="ml-1 shadow-outline text-gradient">Logout</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
