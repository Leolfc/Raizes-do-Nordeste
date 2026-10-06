
import ReactSelect from "react-select";
import styled from "styled-components";
import {Button} from "../../../components/Button"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`

export const Form = styled.div`
border-radius: 20px;
background-color: ${props=> props.theme.black};
padding: 32px;
width:100%;
max-width: 380px;
display: flex;
flex-direction: column;
gap:12px;

`
export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap:4px;
`
export const Label = styled.label`
color: ${props=> props.theme.white};
font-size: 14px;
`
export const Input = styled.input`
width: 100%;
height: 48px;
border-radius: 8px;
padding: 0 12px;
border:none;

`
export const LabelUpload = styled.label`
cursor: pointer;
border: 1px dashed ${props=> props.theme.white};
border-radius: 5px;
padding: 16px 10px;
display: flex;
margin: 20px;
width: 100%;
margin: 20px auto;
> svg{
width: 20px;
height: 20px;
fill: ${props=> props.theme.white};
margin-right: 4px;
}
input{
  display: none;
}
`
export const Select = styled(ReactSelect)`

`

export const SubmitButton = styled(Button)`
margin-top: 40px;
`

export const ErrorMessage = styled.span`
color: ${props=> props.theme.red};
font-size: 14px;
font-weight: 600;
line-height: 80%;
`