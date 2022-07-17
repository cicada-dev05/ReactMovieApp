import React from "react";
import "./Navbar.css";
export const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h3>React Movie App</h3>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.value}
              onChange={(event)=> props.setSearchvalue(event.target.value)}
              
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
