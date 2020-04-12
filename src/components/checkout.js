import React, { useEffect, useRef } from "react"
import { Button } from "@chakra-ui/core"

const Checkout = () => {
  const stripe = useRef()

  useEffect(() => {
    // eslint-disable-next-line new-cap
    // stripe.current = window.Stripe(`pk_test_zywrqZUXI6crPwbzolFxAyF100AF2Wh0HA`)
  })

  const redirectToCheckout = async event => {
    event.preventDefault()
    const { error } = await stripe.current.redirectToCheckout({
      items: [{ sku: `sku_Gf7RpLG0bzzbWo`, quantity: 1 }],
      successUrl: `http://davyhausser.com/`,
      cancelUrl: `http://davyhausser.com/store`,
    })

    if (error) {
      console.warn(`Error:`, error)
    }
  }

  return (
    <Button
      size="lg"
      variantColor="green"
      mt="24px"
      onClick={event => redirectToCheckout(event)}
    >
      Try Mock Payment
    </Button>
  )
}

export default Checkout
