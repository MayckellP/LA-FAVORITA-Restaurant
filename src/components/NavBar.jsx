import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const avisoLogin = () => {
    alert(
      "Inicia Sesión para ver las Reservaciones o dale clic a 'Ver reservaciones sin cuenta'"
    );
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          LA FAVORITA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            {/*<NavLink className="nav-link" to="/about">
              About
  </NavLink>*/}
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
            <NavLink className="nav-link" to="/reservation">
              Reservation
            </NavLink>
            <NavLink className="nav-link" to="/login" onClick={avisoLogin}>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
