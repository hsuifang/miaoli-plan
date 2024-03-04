import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <header
      className="border-b shadow bg-white fixed bottom-0 w-full border-t-2 md:sticky md:top-0 z-20"
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>

        <nav className="contents mx-auto text-base lg:text-lg">
          <ul className="flex items-center ml-5">
            <li className="px-5 active text-primary tracking-widest font-semibold">
              <Link to={"/"}>行程表</Link>
            </li>
            <li className="px-5 text-primary tracking-widest font-semibold">
              <Link to={"/attention"}>注意事項</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
