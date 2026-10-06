import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from "./styles";
import { UserCircleDashedIcon, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import {userUser} from "../../hooks/UserContext.jsx"

export function Header() {

  const navigate = useNavigate()
  const {logout,userInfo} = userUser()

  
  const {pathname} = useResolvedPath()
function logoutUser(){
logout()
  navigate("/");
}

  return (
    <Container>
    <Content>
      <Navigation>
        <div>
          <HeaderLink to="/" $isactive={pathname === "/"}>Home</HeaderLink>
           <hr></hr>
          <HeaderLink to="/cardapio" $isactive={pathname === "/cardapio"}>Cardápio</HeaderLink>
        </div>
      </Navigation>
      <Options>
        <Profile>
        <UserCircleDashedIcon color ="#9758a6" size={25}/>
          <div>
            <p>
              Olá, <span>{userInfo?.name}</span>
              
            </p>
      
            
            <Logout onClick={logoutUser}>Sair</Logout>
          </div>
        </Profile>
         <LinkContainer>
      <ShoppingCart color="#9758a6" size={25}/>
        <HeaderLink to="/carrinho">Carrinho</HeaderLink>
       
      </LinkContainer>
      </Options>
     
      </Content>
    </Container>
  );
}
