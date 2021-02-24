import PropTypes from "prop-types";
import React from "react";
import Button from 'react-bootstrap/Button';

const ProductDescriptionInfo = ({
  product,
}) => {
  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        {<span>{'₴' + product.price} </span>}
      </div>
      <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>
      <a href={product.Link}>
        <Button variant="outline-secondary">Купити квиток</Button>
      </a>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  product: PropTypes.object,
};

export default (ProductDescriptionInfo);
