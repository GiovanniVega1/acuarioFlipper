import React, { useState } from "react";

import "./Navbar.css";
import "../normalize.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Flipper
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/services">Servicios</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/comments">Comentarios</NavLink>
        </li>
        <li>
          <NavLink to="/auth/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
