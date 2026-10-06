
import LogoCart from "../../assets/logoRaizes.jfif"
import { CartItems,CartResume } from "../../components"
import { Banner, Container, Content, Title } from "./styles"


export function Cart(){
  return(
    <Container>
    <Banner>
    <img src={LogoCart} alt="Logo" />
    </Banner>
    <Title>Checkout - Pedido</Title>
    <Content>
    <CartItems/>
    <CartResume/> 
    </Content>
      
    </Container>

  )
}