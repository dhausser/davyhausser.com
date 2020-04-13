import React, { Component } from "react"

export default class Messenger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 100)

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: `v6.0`,
      })
    }
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      const js = d.createElement(s)
      js.id = id
      js.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`
      fjs.parentNode.insertBefore(js, fjs)
    })(document, `script`, `facebook-jssdk`)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    const { isPreloaded } = this.state
    return (
      <div className={isPreloaded ? `main-body is-preload` : `main-body`}>
        <div id="fb-root"></div>
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="102517684675518"
          theme_color="#212C35"
          logged_in_greeting="Hi! Thanks for getting in touch. Please send me any questions you may have."
          logged_out_greeting="Hi! Thanks for getting in touch. Please send me any questions you may have."
        >
          >
        </div>
        {children}
      </div>
    )
  }
}
