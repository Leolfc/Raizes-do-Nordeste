import carrinho from "../../assets/carrinho.svg"
import { ContainerButton } from "./styles"
export function CardButton({...props}) {

  return(
    <ContainerButton{...props}>
    <img src={carrinho}/>
    </ContainerButton>
  )
}