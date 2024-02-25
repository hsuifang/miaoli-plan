import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <header
      className="border-b shadow bg-white sticky top-0 z-10"
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 py-6 flex items-center ">
        <Link to={"/"}>
          <h1>Logo</h1>
        </Link>

        <nav className="contents mx-auto text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="px-5 lg:px-8 active">
              <Link to={"/"}>行程表</Link>
            </li>
            <li className="px-5 lg:px-8">
              <Link to={"/"}>注意事項</Link>
            </li>
            <li className="px-5 lg:px-8">
              <Link to={"/"}>人員</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
