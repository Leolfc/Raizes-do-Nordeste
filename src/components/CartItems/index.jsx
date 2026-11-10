import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useCart } from "../../hooks/CardContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index";
import {
  ButtonGroup,
  Container,
  DeleteButton,
  EmptyCart,
  ProductImage,
  ProductTotalPrice,
} from "./styles";
import TrashIcon from "../../assets/trash.svg";

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  if (!cartProducts?.length) {
    return (
      <EmptyCart>
        <ShoppingCartIcon size={56} weight="duotone" />
        <p>Seu carrinho está vazio</p>
        <Link to="/cardapio">Ver cardápio</Link>
      </EmptyCart>
    );
  }

  return (
    <Container>
      <Table.Root>
        <Table.Header>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Itens</Table.Th>
            <Table.Th>Preço</Table.Th>
            <Table.Th>Quantidade</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Header>
        <Table.Body>
          {cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button
                    type="button"
                    onClick={() => decreaseProduct(product.id)}
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increaseProduct(product.id)}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <ProductTotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </ProductTotalPrice>
              </Table.Td>
              <Table.Td>
                <DeleteButton
                  type="button"
                  onClick={() => deleteProduct(product.id)}
                  aria-label="Remover item"
                >
                  <img src={TrashIcon} alt="" />
                </DeleteButton>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  );
}
