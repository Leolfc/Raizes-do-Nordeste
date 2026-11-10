import carrinho from "../../assets/carrinho.svg"
import { ContainerButton } from "./styles"

export function CardButton({ ...props }) {
  return (
    <ContainerButton aria-label="Adicionar ao carrinho" {...props}>
      <img src={carrinho} alt="" />
    </ContainerButton>
  )
}
