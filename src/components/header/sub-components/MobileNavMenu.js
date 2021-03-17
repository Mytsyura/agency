import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ }) => (
  <nav className="offcanvas-navigation" id="offcanvas-navigation">
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL + "/home"}>
          Головна
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/concerts"}>
          Події
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/services"}>
          Послуги
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/about"}>
          Про нас
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/contact"}>
          Контакти
        </Link>
      </li>
    </ul>
  </nav>
);

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default MobileNavMenu;
