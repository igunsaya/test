import React, { useState } from "react";

export default () => {
  const [showHeaderLinks, setHeaderLinks] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-3 bg-black">
      <div className="w-32 lg:w-56">
        <img className="py-3" src="/images/brand_m0.png" alt="Logo of PHGas"/>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded bg-primary text-white"
          onClick={() => setHeaderLinks(!showHeaderLinks)}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block ${!showHeaderLinks ? "hidden" : ""} lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray mr-10"
          >
            Services
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray mr-10"
          >
            Quote
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray mr-10"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
