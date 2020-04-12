import React, { useState, useRef } from "react"
import { Helmet } from "react-helmet"
// import qs from 'qs';
// import { navigate } from 'gatsby';
import scrollToAnchor from "../../utils/scroll-to-anchor"
import FeaturedSites from "./featured-sites"
// import FilteredShowcase from './filtered-showcase';

const ShowcaseView = ({ data }) => {
  const showcase = useRef()

  console.log(data)

  const [filters, setFilters] = useState([])

  // useEffect(() => {
  //   const {
  //     location: { search = ``, pathname },
  //   } = props;

  //   const { filters } = qs.parse(search.replace(`?`, ``));

  //   if (filters && filters.length) {
  //     setFilters(filters);
  //   }

  //   const queryString = qs.stringify(filters);

  //   if (search.replace(/^\?/, ``) !== queryString) {
  //     navigate(`${pathname}?${queryString}`, { replace: true });
  //   }
  // }, []);

  const handleSetFilters = () => {
    setFilters([].concat(filters))
    scrollToAnchor(showcase.current, () => {})()
  }

  return (
    <>
      <Helmet>
        <title>Showcase</title>
        <meta
          name="description"
          content="Gallery of sites using Gatsby across the web, find inspiration or inspect the code of popular projects."
        />
      </Helmet>
      <h1>Showcase</h1>
      <h2>Featured Sites</h2>
      <FeaturedSites
        setFilters={handleSetFilters}
        featured={data.allProjectsJson.edges}
      />
      <div id="showcase" css={{ height: 0 }} ref={showcase} />
    </>
  )
}

export default ShowcaseView
