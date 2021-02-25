import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import Tabletop from 'tabletop';
import ProductGridSingle from '../../components/product/ProductGridSingle';

const ProductGrid = ({ sliderClassName, spaceBottomClass }) => {
  const { addToast } = useToasts();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: '11RggMvWmXKxLNpBASRohUgQJqlvSSvLiXp16RJAQl_o',
      callback: (googleData) => {
        setProducts(googleData.Лист1.elements);
        setLoading(false);
      },
      error: (e) => {
        addToast('Error', { appearance: 'error' });
        setLoading(false);
      },
      wanted: ['Лист1'],
      sheetPrivacy: 'public',
      simpleSheet: false,
    });
  }, []);

  return (
    <Fragment>
      {loading && (
        <div className="flone-preloader-wrapper">
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {products.map((product) => {
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
  spaceBottomClass: PropTypes.string,
};

export default ProductGrid;
