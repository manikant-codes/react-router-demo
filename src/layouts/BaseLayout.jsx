import React from "react";
import { Link, Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ name: "Manikant" }} />
    </div>
  );
}

export default BaseLayout;
