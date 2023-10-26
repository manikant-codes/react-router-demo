import React from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

function BooksLayout() {
  const objContext = useOutletContext();
  console.log(objContext);
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="book1">Book 1</Link>
          </li>
          <li>
            <Link to="book2">Book 2</Link>
          </li>
          <li>
            <Link to="book3">Book 3</Link>
          </li>
        </ul>
      </div>
      <Outlet context={{ ...objContext }} />
    </div>
  );
}

export default BooksLayout;
