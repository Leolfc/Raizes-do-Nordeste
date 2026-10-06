import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import "./styles.css"
import { useCart } from "../../../hooks/CardContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",

    });


    if (error) {
      toast.error("🥲 Falha no sistema! Tente novamente.")
    } else if (paymentIntent && paymentIntent.status === "succeeded") {

      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price
          }
        })
        const { status } = await api.post("/orders", { products },
          {
            validateStatus: () => true
          },
        )
        if (status === 200 || status === 201) {

          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)  // ✅
            clearCart()
          }, 2000);
          toast.success("Pedido realizado com sucesso😉")
        } else if (status === 409) {
          toast.error("Falha ao realizar pedido😥")
        } else {
          throw new Error()
        }
        console.log(status);
      } catch (error) {
        toast.error("🥲 Falha no sistema! Tente novamente.")
      }

    } else {
  navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
}

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button className="button" disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
        <p>Os métodos são disponibilizados de acordo com a sua região.</p>
      </form>
    </div>
  );
}