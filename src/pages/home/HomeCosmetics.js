import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeCosmetics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>RIO | CONCERT & AGENCY</title>
        <meta
          name="description"
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCosmetics;
