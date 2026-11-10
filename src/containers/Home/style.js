import styled from "styled-components"
import { Link } from "react-router-dom"
import BannerHome from "../../assets/banner-home.svg"
import Background from "../../assets/background.svg"

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 480px;
  padding: 0 12%;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.55) 100%),
    url("${BannerHome}");
  background-size: cover;
  background-position: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 1;
    color: white;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    height: 380px;
    padding: 36px 20px 0;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 75%),
      url("${BannerHome}");
    background-size: cover;
    background-position: 40% center;
    text-align: center;

    div {
      align-items: center;
    }

    h1 {
      font-size: 56px;
    }

    p {
      font-size: 15px;
    }
  }
`

export const MenuLink = styled(Link)`
  margin-top: 8px;
  padding: 12px 32px;
  border-radius: 999px;
  background-color: #9758a6;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(151, 88, 166, 0.4);
  transition:
    background-color 200ms,
    transform 150ms;

  &:hover {
    background-color: #6f357c;
  }

  &:active {
    transform: scale(0.97);
  }
`

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url("${Background}");
`

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 560px) {
    padding: 0 8px;
  }
`
