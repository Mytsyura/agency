import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`} style={{ marginTop: 0 }}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt="" src={process.env.PUBLIC_URL + imageUrl} width={120} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
