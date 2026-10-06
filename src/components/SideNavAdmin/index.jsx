import { NavLinks } from "./navLinks"
import { SignOutIcon } from "@phosphor-icons/react"
import { Container,NavLink,NavLinkContainer, Footer } from "./styles"
import {userUser} from "../../hooks/UserContext.jsx"
import Logo from "../../assets/Logo.svg"
import { useResolvedPath } from "react-router-dom"
export function SideNavAdmin(){
   const {logout,userInfo} = userUser()
   
  return(
    <Container>
    <img src={Logo} alt="amburguer logo" />
    <NavLinkContainer>
    {NavLinks.map((link)=>(<NavLink key={link.id} to={link.path}>
    {link.icon}
    <span>{link.label}</span>
   
    </NavLink>))}
    </NavLinkContainer>
    <Footer>
    <NavLink to="/login"  onClick={logout} >
    <SignOutIcon/>
    <span>Sair</span>
    </NavLink>
    </Footer>
    </Container>
  )
}