import {createGlobalStyle} from "styled-components"
import "react-toastify"
const globalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-style: normal;
}
button{
  cursor: pointer;
}
`

export default globalStyles