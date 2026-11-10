import PropTypes from "prop-types"
import { CardImage, Container, Info } from "./styles"
import { CardButton } from "../CardButton"
import { useCart } from "../../hooks/CardContext.jsx"

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <Info>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </Info>
      <CardButton onClick={() => putProductInCart(product)} />
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
