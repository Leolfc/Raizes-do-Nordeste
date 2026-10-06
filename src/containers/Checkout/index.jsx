import {useLocation} from "react-router-dom"
import {Elements} from "@stripe/react-stripe-js"
import stripePromisse from "../../Config/stripeConfig"
import CheckoutForm  from "../../components/Stripe/CheckoutForm"
export function Checkout(){
const {state} = useLocation()
const clientSecret = state?.data?.clientSecret
if(!clientSecret){return <div>Error...</div>}
  return(
    <Elements stripe = {stripePromisse} options={{clientSecret}}>
    <CheckoutForm/>
    </Elements>
  )
}