"use client"

import { useContext, useEffect, useState } from "react"
import { Layout } from "../components/layout/Layout"
import { Title } from "../components/title/Title"
import OrderContext from "../../contexts/OrderContext"
import { Button } from "../components/button/Button"
import { convertToCurrency } from "../../helpers/convertToCurrency"
import {
  CheckoutAction,
  CheckoutItem,
  CheckoutItemFlex,
  PaymentMethodGroup,
} from "./Checkout.style"
import { useRouter } from "next/navigation"

export default function Checkout() {
  const { pizzaOrder } = useContext(OrderContext)

  const [paymentOptions, setPaymentOptions] = useState([])

  const [paymentType, setPaymentType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (event) => {
    setPaymentType(event.target.value)
  }

  const getPaymemntOptions = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/payment/options")
      const options = await response.json()
      setPaymentOptions(options)
    } catch (error) {
      alert(`Deu ruim: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const getPaymentOptiontype = (paymentType: number) => {
    if (!paymentType) return

    const filteredValue = paymentOptions.filter(
      (payment) => payment.value === paymentType
    )

    return filteredValue[0].text
  }

  const createOrder = (orderPayload) => {
    return fetch("http://localhost:8000/order/create_order", {
      method: "POST",
      body: JSON.stringify(orderPayload),
    })
  }

  const handleClick = () => {
    createOrder(pizzaOrder)

    if (sessionStorage == null) {
      router.push('/login')
    }
    else {
      router.push('/finishedOrder')
    }
    
  }

  useEffect(() => {
    if (pizzaOrder === undefined) {
    return router.push('/sizes')
    }
  }, [])

  useEffect(() => {
    getPaymemntOptions()
  }, [])

  return (
    <Layout>
      {isLoading ? (
        <>Carregendo</>
      ) : (
        <>
          <Title tabIndex={0}>Pagamento</Title>
          <CheckoutItem>
            <h2>Items</h2>
            <CheckoutItemFlex>
              <p>
                {pizzaOrder?.item.name}/{pizzaOrder?.item.size}
              </p>
              <p>{convertToCurrency(pizzaOrder?.item.value)}</p>
            </CheckoutItemFlex>
          </CheckoutItem>
          <CheckoutItem>
            <h2>Forma de pagamento</h2>
            <CheckoutItemFlex>
              <PaymentMethodGroup>
                <label htmlFor="payments">Selecione a forma de pagamento</label>
                <select
                  name="payments"
                  id="payments"
                  defaultValue={""}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Selcione
                  </option>
                  {paymentOptions.map(({ id, value, text }) => (
                    <option key={id} value={value}>
                      {text}
                    </option>
                  ))}
                </select>
              </PaymentMethodGroup>
              <p>{getPaymentOptiontype(Number(paymentType))}</p>
            </CheckoutItemFlex>
          </CheckoutItem>
          <CheckoutItem>
            <CheckoutItemFlex>
              <h2>Total do pedido</h2>
              <p>{convertToCurrency(pizzaOrder?.total)}</p>
            </CheckoutItemFlex>
          </CheckoutItem>
          <CheckoutAction>
            <Button onClick={handleClick} disabled={!Boolean(paymentType)}>
              Fazer pedido
            </Button>
          </CheckoutAction>
        </>
      )}
    </Layout>
  )
}