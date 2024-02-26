import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <hr />
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
