import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    padding-left: 40px;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 50%;
    right: 50%;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    margin-bottom: 40px;
  }
`;
export const ContainerItems = styled.div`
  background: url("${(props) => props.imageUrl}");
  background-size: cover;
  background-position: center;
  display: flex;
  text-align: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  p {
   
  }
`;
export const CategoryButton  = styled(Link)`
 color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    height: 60px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        background-color: #9758a6;
    }
`