import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.svg"
import Backgound from "../../assets/backgroundGroup.png"
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #1e1e1e;

  @media (max-width: 900px) {
    flex-direction: column;
    background: url("${Backgound}");
    background-color: #1e1e1e;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50%;
  min-height: 100vh;
  background: url("${BackgroundLogin}");
  background-size: cover;
  background-position: center;

  img {
    width: 70%;
    max-width: 440px;
    border-radius: 32px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 900px) {
    max-width: 100%;
    min-height: auto;
    padding: 40px 20px 8px;
    background: none;

    img {
      width: 140px;
      border-radius: 24px;
    }
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 50%;
  min-height: 100vh;
  padding: 40px 24px;
  background: url("${Backgound}");
  background-color: #1e1e1e;

  > p {
    color: white;
    font-size: 15px;
    font-weight: 500;
    text-align: center;

    a {
      color: #c48fd1;
      font-weight: 700;
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    max-width: 100%;
    min-height: auto;
    flex: 1;
    padding: 16px 20px 40px;
    background: none;
  }
`

export const Title = styled.h2`
  max-width: 440px;
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.15;
  color: white;
  text-align: center;

  span {
    color: #9758a6;
    font-family: "Road Rage", sans-serif;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 400px;
  padding: 20px 0;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  input {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border: 2px solid transparent;
    border-radius: 12px;
    background-color: #fff;
    color: #363636;
    outline: none;
    transition:
      border-color 200ms,
      box-shadow 200ms;
  }

  input:focus {
    border-color: #9758a6;
    box-shadow: 0 0 0 4px rgba(151, 88, 166, 0.3);
  }

  label {
    font-size: 15px;
    font-weight: 600;
    color: white;
  }

  p {
    min-height: 16px;
    font-size: 13px;
    line-height: 1.2;
    color: #ff5c7c;
    font-weight: 600;
  }
`

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: white;
`
