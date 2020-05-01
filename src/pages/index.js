import React from "react"
import { navigate } from "gatsby"
import Showcase from "./showcase"

export default () => {
  if (window) {
    navigate("/showcase/")
  }
  return <Showcase />
}
