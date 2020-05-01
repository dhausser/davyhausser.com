import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default () => {
  navigate("/showcase/")
  return <div></div>
}
