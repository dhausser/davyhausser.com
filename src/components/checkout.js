import React, { useEffect, useRef } from "react"

const Checkout = () => {
  const stripe = useRef()

  useEffect(() => {
    stripe.current = window.Stripe("pk_test_zywrqZUXI6crPwbzolFxAyF100AF2Wh0HA")
  })

  const redirectToCheckout = async (event) => {
    event.preventDefault()
    const { error } = await stripe.current.redirectToCheckout({
      items: [{ sku: "sku_Gf7RpLG0bzzbWo", quantity: 1 }],
      successUrl: `http://davyhausser.com/`,
      cancelUrl: `http://davyhausser.com/store`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <button onClick={event => redirectToCheckout(event)}>
      Buy My Book
    </button>
  )
}

export default Checkout