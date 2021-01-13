import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

export { default as globalStyles } from "./global"

export const breakpoints = {
  mobileMin: "480px",
  mobileMax: "959px",
  tabletMin: "960px",
  tabletMax: "1199px",
  desktopMin: "1200px",
}

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Heading = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  transform: translateY(30px);
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 40px;
    transform: scale(1);
  }

  > span {
    color: #b4e0e8;
  }
`

export const HeadingMain = styled.h1`
  font-weight: 700;
  font-size: 7vw;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  margin-bottom: 0;
  margin-left: 0px;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 60px;
    margin-bottom: 0;
  }

  .blue {
    color: #b4e0e8;
  }

  > span {
    display: inline-block;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;
  }

  > span:nth-of-type(1) {
    animation-delay: 0s;
  }

  > span:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  > span:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`

export const HeadingWrapCont = styled.div`
  padding-top: 40px;
  background-position: 0 0;
  background-repeat: no-repeat;
`

export const Container = styled.div`
  margin: 100px 0 200px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`

export const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`

export const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }

  p {
    font-weight: 700;
    min-width: 200px;
    margin: 20px 0 0 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      min-width: unset;
      margin: 30px 0;
    }

    span {
      font-size: 20px;
      margin-right: 5px;
    }
  }
`

export const SkillContent = styled.div`
  width: 100%;
`

export const TextContent = styled.div`
  max-width: 700px;
  .Paragraph {
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`

export const TextContentWrap = styled(TextContent)`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`

export const Paragraph = styled.p`
  margin: 50px 0;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;

  a {
    border-bottom: 2px solid transparent;
    transition: 0.3s;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`

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
`
