import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { breakpoints, Heading, Paragraph } from "../utils/styles";
import wanderlost from "../images/wanderlost-dark.png";

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

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;

  /* :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-image: url(${wanderlost});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${wanderlost});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  } */
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
          {/* <ProjectImage /> */}
          <Img fluid={data.file.childImageSharp.fluid} />
        </Link>
        <Link title="Wanderlost" to="/wanderlost">
          <SubHeading>Wanderlost</SubHeading>
        </Link>
        <ProjectParagraph>
          An ecommerce experiement about experiences and discovery.
        </ProjectParagraph>
        <Link title="Wanderlost" to="/wanderlost">
          <h1>Wanderlost</h1>
        </Link>
        <Link title="Wanderlost" to="/wanderlost">
          <ProjectLink>
            View Project <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </Project>
      <Project>
        <Link title="Wanderlost" to="/wanderlost">
          {/* <ProjectImage /> */}
          <Img fluid={data.file.childImageSharp.fluid} />
        </Link>
        <Link title="Wanderlost" to="/wanderlost">
          <SubHeading>Wanderlost</SubHeading>
        </Link>
        <ProjectParagraph>
          An ecommerce experiement about experiences and discovery.
        </ProjectParagraph>
        <Link title="Wanderlost" to="/wanderlost">
          <h1>Wanderlost</h1>
        </Link>
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
