import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"

import { Button } from "@chakra-ui/core"

const Checkout = () => {
  const [stripe, setStripe] = useState()

  useEffect(() => {
    const load = async () => {
      setStripe(await loadStripe(`pk_test_zywrqZUXI6crPwbzolFxAyF100AF2Wh0HA`))
    }
    load()
  }, [])

  const redirectToCheckout = async e => {
    e.preventDefault()
    const { error } = await stripe.redirectToCheckout({
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
      onClick={redirectToCheckout}
    >
      Try Mock Payment
    </Button>
  )
}

export default Checkout
