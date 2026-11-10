import ReactSelect from "react-select";
import styled from "styled-components";
import { Button } from "../../../components/Button"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);

  @media (max-width: 900px) {
    align-items: flex-start;
    min-height: auto;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  box-shadow: 0 16px 40px rgba(31, 31, 31, 0.25);

  @media (max-width: 480px) {
    padding: 24px 18px;
    border-radius: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: 500;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  transition:
    border-color 200ms,
    box-shadow 200ms;

  &:focus {
    border-color: ${(props) => props.theme.purple};
    box-shadow: 0 0 0 4px rgba(151, 88, 166, 0.3);
  }
`

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 12px auto;
  padding: 16px 14px;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 10px;
  color: ${(props) => props.theme.white};
  font-size: 14px;
  cursor: pointer;
  word-break: break-all;
  transition:
    border-color 200ms,
    background-color 200ms;

  &:hover {
    border-color: ${(props) => props.theme.purple};
    background-color: rgba(151, 88, 166, 0.12);
  }

  > svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    fill: ${(props) => props.theme.white};
  }

  input {
    display: none;
  }
`

export const Select = styled(ReactSelect)``

export const SubmitButton = styled(Button)`
  margin-top: 24px;
`

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.red};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
`
