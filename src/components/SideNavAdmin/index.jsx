import { NavLinks } from "./navLinks"
import { SignOutIcon } from "@phosphor-icons/react"
import { Container, NavLink, NavLinkContainer, Footer } from "./styles"
import { userUser } from "../../hooks/UserContext.jsx"
import Logo from "../../assets/logoRaizes.jfif"
import { useLocation } from "react-router-dom"

export function SideNavAdmin() {
  const { logout } = userUser()
  const { pathname } = useLocation()

  return (
    <Container>
      <img src={Logo} alt="Raízes do Nordeste" />
      <NavLinkContainer>
        {NavLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  )
}
