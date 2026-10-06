import styled from "styled-components"
import BannerCart from "../../assets/banner-cart.svg"
import Background from "../../assets/background.svg"
export const Container = styled.div`
width: 100%;
background: url("${Background}");
background-color: aliceblue;
min-height: 100%;


`

export const Banner = styled.div`
background: url("${BannerCart}");
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 180px;


img{
 height:170px ;
 object-fit: cover;
border-radius: 8px;
}
`
export const Title = styled.div`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: #61a120;
text-align: center;
position: relative;
&::after{
content: "";
position: absolute;
left: 50%;
right: 50%;
  width: 56px;
  bottom: 0;
  height: 4px;
  background-color:#61a120 ;
}
`
export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
width: 100%;
gap:20px;
max-width: 1280px;
padding: 40px;
margin: 0 auto;

background-position:center;
min-height: 100vh;
`
