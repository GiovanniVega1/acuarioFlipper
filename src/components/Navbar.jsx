import React, { useState } from "react";

import "./Navbar.css";
import "../normalize.css";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/auth";

export const Navbar = () => {

  const { displayName } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

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
          <Typography mt={ 1 } variant="p" noWrap component='div' >
            {displayName}
          </Typography>
        </li>
        <li>
        <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
        </IconButton>
        </li>
      </ul>
    </nav>
  );
};
