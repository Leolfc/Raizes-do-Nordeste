import styled from "styled-components";



export const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin-bottom: 20px;
background-color: white;
padding: 20px;
gap: 10px;



*{
  color: #484848;
  font-weight: 500;
}
.container-top{
  display: grid;
  grid-gap: 1px 50%;
  grid-template-areas: 
  "title title"
  "items items-price"
  "delivery-tax delivery-tax-price"
  ;
  width:100%;
  .title{
    grid-area: title;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: #484848;
    color: white;
    width: 100%;
    padding:12px;
    text-align: center;
    border-top-right-radius:20px ;
      border-top-left-radius:20px ;
  }
  .items{
    grid-area: items;
    padding-left: 20px
  }
  .items-price{
    grid-area: items-price;
    padding-right: 20px;
  }
  .delivery-tax{
    grid-area: delivery-tax;
     padding-left: 20px
  }
  .delivery-tax-price{
    grid-area: delivery-tax-price;
      padding-right: 20px;
  }

}
`
export const ContainerBottom = styled.div`
display: flex;
justify-content: space-between;

p{
  font-weight: bold;
  font-size: 18px
}
`