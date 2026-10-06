import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

background-color: ${(props) => props.theme.mainBlack};
width: 100%;
height: 72px;
`
export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1280px;
margin: 0 auto;
`
export const Navigation = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 72px;

div{
  margin-left: 56px;
  display: flex;
  align-items: center;
  gap:20px;
}
hr{
  height: 24px ;
  border: 1px solid #625e53
}
`
export const HeaderLink = styled(Link)`
color: ${({ active }) => active ? (props) => props.theme.purple : "white"};
border-bottom: ${props => props.$isActive ? "3px solid #9758a6" : "none"};
text-decoration: none;
font-size: 14px;
transition: color 200ms;
&:hover{
color: #9758a6;
}
`
export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:48px;

`

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 12px;
font-size: 14px;
p{
  color: white;
  line-height: 90%;
  span{
  font-weight: 700;
  color: #9758a6;
}
}

`
export const Logout = styled.button`
color: red;
font-weight: 700;
background-color: transparent;
border: none;

`
export const LinkContainer = styled.div`
display: flex;
align-content: center;
gap: 10px;

`
