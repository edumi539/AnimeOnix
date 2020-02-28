import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "./header.css";
const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="navbar navbar-expand-lg" navbar-light bg-light>
        <a className="navbar-brand" href="#">
          Anime Onix
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>

            <li className="nav-item active">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default HeaderBar;
