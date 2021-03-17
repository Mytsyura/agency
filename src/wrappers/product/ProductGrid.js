import PropTypes from 'prop-types';
import React, {Fragment, useEffect, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {AutoComplete} from 'antd';
import Tabletop from 'tabletop';
import ProductGridSingle from '../../components/product/ProductGridSingle';

const ProductGrid = ({sliderClassName, spaceBottomClass}) => {
  const {addToast} = useToasts();
  const [products, setProducts] = useState([]);
  const [startProducts, setStartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [startOptions, setStartOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: '11RggMvWmXKxLNpBASRohUgQJqlvSSvLiXp16RJAQl_o',
      callback: (googleData) => {
        setProducts(googleData.Лист1.elements);
        setStartProducts(googleData.Лист1.elements);
        const newOptions = [
          ...new Set(googleData.Лист1.elements.map((el) => el.City)),
        ].map((e) => ({value: e}));
        setOptions(newOptions);
        setStartOptions(newOptions);
        setLoading(false);
      },
      error: (e) => {
        addToast('Error', {appearance: 'error'});
        setLoading(false);
      },
      wanted: ['Лист1'],
      sheetPrivacy: 'public',
      simpleSheet: false,
    });
  }, []);

  const onSelect = (a) => {
    setProducts(startProducts.filter((e) => e.City.includes(a)));
  };

  const onSearch = (text) => {
    if (!text) {
      setProducts(startProducts);
    }
    setOptions(startOptions.filter((e) => e.value.includes(text)));
  };

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
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          top: '-50px',
        }}
      >
        <AutoComplete
          options={options}
          style={{width: 300}}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Всі міста"
          allowClear
        />
      </div>
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
