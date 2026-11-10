import { createGlobalStyle } from "styled-components"
import "react-toastify"

const globalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-style: normal;
}

html{
  scroll-behavior: smooth;
}

body{
  min-height: 100vh;
  background-color: #f4f4f4;
  color: #363636;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

img{
  max-width: 100%;
}

button{
  cursor: pointer;
  font-family: inherit;
}

input, select, textarea{
  font-family: inherit;
  font-size: 16px;
}

::selection{
  background-color: #9758a6;
  color: #fff;
}

.Toastify__toast{
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  border-radius: 12px;
}

@media (max-width: 480px){
  .Toastify__toast-container{
    padding: 12px;
  }
}
`

export default globalStyles
