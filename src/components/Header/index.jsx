import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ListIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  Badge,
  CartLink,
  Container,
  Content,
  HeaderLink,
  LoginLink,
  LogoLink,
  Logout,
  MenuButton,
  Navigation,
  Options,
  Profile,
} from "./styles";
import Logo from "../../assets/logoRaizes.jfif";
import { userUser } from "../../hooks/UserContext.jsx";
import { useCart } from "../../hooks/CardContext.jsx";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logout, userInfo } = userUser();
  const { cartProducts } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  function logoutUser() {
    logout();
    closeMenu();
    navigate("/");
  }

  return (
    <Container>
      <Content>
        <LogoLink to="/" onClick={closeMenu}>
          <img src={Logo} alt="Raízes do Nordeste" />
        </LogoLink>

        <Navigation $open={menuOpen}>
          <HeaderLink to="/" $isActive={pathname === "/"} onClick={closeMenu}>
            Home
          </HeaderLink>
          <HeaderLink
            to="/cardapio"
            $isActive={pathname === "/cardapio"}
            onClick={closeMenu}
          >
            Cardápio
          </HeaderLink>

          <Profile>
            <UserCircleIcon size={30} weight="duotone" />
            {userInfo?.name ? (
              <div>
                <p>
                  Olá, <span>{userInfo.name}</span>
                </p>
                <Logout onClick={logoutUser}>Sair</Logout>
              </div>
            ) : (
              <LoginLink to="/login" onClick={closeMenu}>
                Entrar
              </LoginLink>
            )}
          </Profile>
        </Navigation>

        <Options>
          <CartLink
            to="/carrinho"
            $isActive={pathname === "/carrinho"}
            onClick={closeMenu}
            aria-label="Carrinho"
          >
            <ShoppingCartIcon size={22} weight="bold" />
            <span>Carrinho</span>
            {totalItems > 0 && <Badge>{totalItems}</Badge>}
          </CartLink>

          <MenuButton
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
          </MenuButton>
        </Options>
      </Content>
    </Container>
  );
}
