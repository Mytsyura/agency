import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Tabletop from 'tabletop';

const HomeCosmetics = lazy(() => import("./pages/home/HomeCosmetics"));


// shop pages
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages

const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));

const App = (props) => {
  useEffect(() => {
    Tabletop.init({
      key: '11RggMvWmXKxLNpBASRohUgQJqlvSSvLiXp16RJAQl_o',
      callback: (googleData) => {
        console.log(googleData);
        localStorage.setItem('data', googleData)
      },
      wanted: ['Лист1'],
      sheetPrivacy: 'public',
      simpleSheet: false,
    });
  }, []);
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json")
        }
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeCosmetics}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/home-cosmetics"}
                  component={HomeCosmetics}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                  component={ShopGridFilter}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                  component={BlogNoSidebar}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />

              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
