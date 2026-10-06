import styled from "styled-components";

export const ProductImage = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 16px;
`;
export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap:12px;
button{
  display: flex;
  align-items:center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 4px;
  background-color: #9758a6;
  &:hover{
    background-color: #6f357c;
  }
}
`

export const EmptyCart = styled.div`
font-size: 20px ;
text-align:center;
font-weight: bold;
`
export const ProductTotalPrice = styled.p`
font-size: 18px;
font-weight: bold;
color: #9758a6;

`
export const TrashImagem = styled.img`
width: 40px;
height: 40px;
cursor: pointer;
`