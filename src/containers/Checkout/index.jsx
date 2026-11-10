import {useLocation} from "react-router-dom"
import {Elements} from "@stripe/react-stripe-js"
import stripePromisse from "../../Config/stripeConfig"
import CheckoutForm  from "../../components/Stripe/CheckoutForm"
export function Checkout(){
const {state} = useLocation()
const clientSecret = state?.data?.clientSecret
const appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#9758a6",
    borderRadius: "10px",
  },
}
if(!clientSecret){return <div>Error...</div>}
  return(
    <Elements stripe = {stripePromisse} options={{clientSecret, appearance}}>
    <CheckoutForm/>
    </Elements>
  )
}