import React, { useEffect } from "react"
import { navigate } from "gatsby"

export default () => {
  useEffect(() => {
    if (window) {
      navigate("/showcase/")
    }
  })
  return <div />
}
