import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:50px;
padding: 20px;
border-radius: 8px;
background-color: white;
position: relative
;
div{
 width : 100%;
 height: 80px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 cursor: grab;
 gap: 5px;
 p{
  font-size: 18px;
  color: #ff8c05;
  line-height: 20px;
  margin-top: 40px;
 }
 strong{
  font-size: 22px;
  color: #363636;
  font-weight: 800;
  line-height: 20px;
 }
}
`
export const CardImage = styled.img`
height: 100px;
position: absolute;
top: -50px;
z-index: 9999;

`


