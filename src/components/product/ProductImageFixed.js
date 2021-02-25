import PropTypes from "prop-types";
import React from "react";

const ProductImageFixed = ({ product }) => {
  return (
    <div className="product-large-image-wrapper">

      <div className="product-fixed-image">
        {product.Banner ? (
          <img
            src={product.Banner}
            alt=""
            className="img-fluid"
          />
        ) : (
            ""
          )}
      </div>
    </div>
  );
};

ProductImageFixed.propTypes = {
  product: PropTypes.object
};

export default ProductImageFixed;
