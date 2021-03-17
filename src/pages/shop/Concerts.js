import PropTypes from "prop-types";
import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import TabProduct from "../../wrappers/product/TabProduct";

const Concerts = ({ location }) => {
    const { pathname } = location;
    return (
        <Fragment>
            <MetaTags>
                <title>RIO | Події</title>
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>RIO</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>CONCERT & AGENCY</BreadcrumbsItem>

            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* tab product */}
                                <TabProduct spaceBottomClass="pb-60" category="fashion" />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}

Concerts.propTypes = {
    location: PropTypes.object,
    products: PropTypes.array
}

const mapStateToProps = state => {
    return {
        products: state.productData.products
    }
}

export default connect(mapStateToProps)(Concerts);
