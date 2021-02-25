import PropTypes from "prop-types";
import React from "react";
import Button from 'react-bootstrap/Button';
import { BsCreditCard } from 'react-icons/bs';
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiTwotoneBank,
} from 'react-icons/ai';

const ProductDescriptionInfo = ({
  product,
}) => {
  return (
    <div className="product-details-content ml-70">
      <div className="product-details-price text-center">
        {<span>{product.Event} </span>}
      </div>
      <div className="product-content text-center product_card">
        <div className="product-price price">
          <div className="icon-wrapper">
            <AiTwotoneBank size="2rem" color="#555252" />
          </div>
          <span className="item">{product.Place}</span>
        </div>
        <div className="product-price price">
          <div className="icon-wrapper">
            <AiOutlineEnvironment size="2rem" color="#555252" />
          </div>
          <span className="item">{product.City}</span>
        </div>
        <div className="product-price price">
          <div className="icon-wrapper">
            <AiOutlineCalendar size="2rem" color="#555252" />
          </div>
          <span className="item">{product.Data}</span>
        </div>
        <div className="product-price price">
          <div className="icon-wrapper">
            <AiOutlineClockCircle size="2rem" color="#555252" />
          </div>
          <span className="item">{product.Time}</span>
        </div>
        <div className="product-price price">
          <div className="icon-wrapper">
            <BsCreditCard size="2rem" color="#555252" />
          </div>
          <span className="price-element">{product.Price + ' ₴'}</span>
        </div>
        <a href={product.Link}>
          <Button variant="outline-secondary" className="buy-btn">Купити квиток</Button>
        </a>
      </div>
      <div className="pro-details-list">
        <p>{product.Description}</p>
      </div>

    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  product: PropTypes.object,
};

export default (ProductDescriptionInfo);
