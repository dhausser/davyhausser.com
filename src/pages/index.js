import React, { useEffect } from "react";
import { navigate, graphql } from "gatsby";

import PageMetadata from "../components/page-metadata";

export default ({ data }) => {
  useEffect(() => {
    if (window) {
      navigate("/showcase/");
    }
  });
  return (
    <PageMetadata
      title={`Showcase | ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description}
    />
  );
};

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
