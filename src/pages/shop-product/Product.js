import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useToasts } from 'react-toast-notifications';
import Tabletop from 'tabletop';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import RelatedProductSlider from '../../wrappers/product/RelatedProductSlider';
import ProductImageDescription from '../../wrappers/product/ProductImageDescription';

const Product = () => {
  const params = useParams();
  const { addToast } = useToasts();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: '11RggMvWmXKxLNpBASRohUgQJqlvSSvLiXp16RJAQl_o',
      callback: (googleData) => {
        setProduct(googleData.Лист1.elements.find((e) => e.ID === params.id));
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
    <>
      {loading && (
        <div className="flone-preloader-wrapper">
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <MetaTags>
        <title>RIO | Concert & Agency</title>
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>
        Про Подію
      </BreadcrumbsItem>

      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* related product slider */}
        <RelatedProductSlider spaceBottomClass="pb-95" />
      </LayoutOne>
    </>
  );
};

Product.propTypes = {
  location: PropTypes.object,
};

export default Product;
