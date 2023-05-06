import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import { images } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-filter z-50 ${
          toggleMenu ? "block" : "hidden"
        }`}
      ></div>
      <div className="flex items-center justify-between lg:py-16 py-8">
        <div className="flex-shrink-0">
          <a href="" className="font-bold text-lg min-w-[121px]">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="hidden lg:block flex-grow items-center text-right text-lg font-semibold text-dark-grayish-blue">
          <a href="" className="py-4 px-2 mr-8 hover:text-soft-red">
            Home
          </a>
          <a href="" className="py-4 px-2 mr-8 hover:text-soft-red">
            New
          </a>
          <a href="" className="py-4 px-2 mr-8 hover:text-soft-red">
            Popular
          </a>
          <a href="" className="py-4 px-2 mr-8 hover:text-soft-red">
            Trending
          </a>
          <a href="" className="py-4 px-2 hover:text-soft-red">
            Categories
          </a>
        </div>

        <div className="flex-grow-0 text-right lg:hidden">
          {!toggleMenu && (
            <img
              src={images.menu}
              className="h-6"
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <ul
              className="z-50 fixed -top-0 -right-2 p-6 w-[70vw] h-screen lg:hidden list-none font-semibold
            flex flex-col justify-start items-start bg-off-white text-black animate-slide-in"
            >
              <div className="text-xl w-full my-2 flex flex-row justify-end items-end pb-10">
                <img
                  src={images.close}
                  className="h-8"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <li className="mx-4 cursor-pointer my-2 text-lg">Home</li>
              <li className="mx-4 cursor-pointer my-2 text-lg">New</li>
              <li className="mx-4 cursor-pointer my-2 text-lg">Popular</li>
              <li className="mx-4 cursor-pointer my-2 text-lg">Trending</li>
              <li className="mx-4 cursor-pointer my-2 text-lg">Categories</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
