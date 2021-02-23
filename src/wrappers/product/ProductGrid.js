import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Tabletop from 'tabletop';
import ProductGridSingle from "../../components/product/ProductGridSingle";

const ProductGrid = ({
  sliderClassName,
  spaceBottomClass
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: '11RggMvWmXKxLNpBASRohUgQJqlvSSvLiXp16RJAQl_o',
      callback: (googleData) => {
        console.log(googleData.Лист1.elements);
        setProducts(googleData.Лист1.elements);
        localStorage.setItem('data', googleData)
      },
      wanted: ['Лист1'],
      sheetPrivacy: 'public',
      simpleSheet: false,
    });
  }, []);

  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            key={product.ID}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductGrid;
