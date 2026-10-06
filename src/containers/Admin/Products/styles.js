import styled from "styled-components";

export const Container = styled.div`

`

export const ProductsImage = styled.img`
width: 80px;
height: 80px;
padding:12px;
border-radius: 16px;
`

export const EditButton = styled.button`
border:0;
background: ${props=> props.theme.darkWhite};
padding: 8px;
width:32px;
height:32px;
border-radius: 8px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  background: ${props=> props.theme.purple};
}
`
