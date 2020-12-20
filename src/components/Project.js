import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { breakpoints, Heading, Paragraph } from "../utils/styles";

export const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  :hover {
    border-bottom: 2px solid;
  }

  span {
    font-size: 20px;
  }
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

function ProjectRow({ imageFluid }) {
  return (
    <Project>
      <Link title="Wanderlost" to="/wanderlost">
        <Img fluid={imageFluid} />
      </Link>
      <Link title="Wanderlost" to="/wanderlost">
        <SubHeading>Wanderlost</SubHeading>
      </Link>
      <ProjectParagraph>
        An ecommerce experiement about experiences and discovery.
      </ProjectParagraph>
      <Link title="Wanderlost" to="/wanderlost">
        <ProjectLink>
          View Project <span>&#8250;</span>
        </ProjectLink>
      </Link>
    </Project>
  );
}

export default ProjectRow;
