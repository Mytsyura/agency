import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";

const Services = () => {

  return (
    <Fragment>
      <MetaTags>
        <title>RIO | Concert & Agency</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Наші Послуги</BreadcrumbsItem>

      <LayoutOne >
        {/* breadcrumb */}
        <Breadcrumb />

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Services.propTypes = {
  location: PropTypes.object
};

export default Services;
