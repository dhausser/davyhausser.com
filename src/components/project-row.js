import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { breakpoints, Heading, Paragraph } from "../utils/styles";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: unset;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
    height: 500px;
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  :hover {
    border-bottom: 2px solid black;
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

function ProjectRow({ data }) {
  return (
    <ProjectContainer>
      <Project>
        <Link title="Wanderlost" to="/wanderlost">
          <Img fluid={data.file.childImageSharp.fluid} />
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
      <Project>
        <Link title="Wanderlost" to="/wanderlost">
          <Img fluid={data.file.childImageSharp.fluid} />
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
    </ProjectContainer>
  );
}

export default ProjectRow;
