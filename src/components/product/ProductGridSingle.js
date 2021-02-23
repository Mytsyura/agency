import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCreditCard } from 'react-icons/bs';
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiTwotoneBank,
} from 'react-icons/ai';

const ProductGridSingle = ({ product, sliderClassName, spaceBottomClass }) => (
  <>
    <div
      className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
        sliderClassName ? sliderClassName : ''
        }`}
    >
      <div
        className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ''}`}
      >
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + '/product/' + product.ID}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.Banner}
              alt={product.Event}
            />
          </Link>
        </div>
        <div className="product-content text-center product_card">
          <h2 className="title">
            <Link to={process.env.PUBLIC_URL + '/product/' + product.ID}>
              {product.Event}
            </Link>
          </h2>
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
        </div>
      </div>
    </div>
  </>
);

ProductGridSingle.propTypes = {
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;
