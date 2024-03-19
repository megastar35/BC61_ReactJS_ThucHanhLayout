import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-950 text-white container">
      <nav className=" flex max-w-7xl items-center justify-between p-1 lg:px-8">
        <div className="p-2">
          <a href="" className="space-x-1">
            <i className="fa-solid fa-arrow-left"></i>
            <span>Overview Page</span>
          </a>
        </div>
        <div>
          <ul className="flex">
            <li>
              <a href="" className="p-2">
                Home
              </a>
            </li>
            <li>
              <a href="" className="p-2">
                About
              </a>
            </li>
            <li>
              <a href="" className="p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
