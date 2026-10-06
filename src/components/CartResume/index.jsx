
import { Button } from "../Button";
import { Container, ContainerBottom } from "./styles";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import {useCart} from "../../hooks/CardContext.jsx"
import {api} from "../../services/api.js"
import {formatPrice} from "../../utils/formatPrice.js"
export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax, setDeliveryTax] = useState(500);
  const navigate = useNavigate();
  const {cartProducts, clearCart} = useCart();

  useEffect(()=>{
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    } ,0)
    setFinalPrice(sumAllItems)
  }, [cartProducts])
  const submitOrder = async () =>{
    const products = cartProducts.map((product)=>{
return {id:product.id, 
quantity: product.quantity, 
price: product.price}
    })
    try {
      const {data} = await api.post("/create-payment-intent", {products})
      
  navigate("/checkout", {state:{data}})


    } catch (error) {
      toast('🥲 Falha no pedido! Tente novamente.', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
    }}

  return (
    <div>
    <Container>
    <div className="container-top">
    <h2 className="title">Resumo do pedido</h2>
    <p className="items">Itens</p>
    <p className="items-price">{formatPrice(finalPrice)}</p>
    <p className="delivery-tax">Taxa de entrega</p>
    <p className="delivery-tax-price">{formatPrice( deliveryTax)}</p>
    </div>
    <ContainerBottom>
    <p>Total</p>
    <p>{formatPrice(finalPrice + deliveryTax)}</p>
    
    </ContainerBottom>
    </Container>
    <Button onClick={submitOrder}>Finalizar compra</Button>
    </div>
  )
}