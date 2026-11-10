import styled from "styled-components"
import BannerCart from "../../assets/banner-cart.svg"
import Background from "../../assets/background.svg"

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url("${Background}");
  background-color: #f4f4f4;
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: url("${BannerCart}");
  background-position: center;
  background-size: cover;

  img {
    height: 160px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 560px) {
    height: 150px;

    img {
      height: 116px;
      border-radius: 16px;
    }
  }
`

export const Title = styled.h2`
  position: relative;
  margin-top: 40px;
  padding-bottom: 14px;
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 800;
  color: #61a120;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 56px;
    height: 4px;
    border-radius: 4px;
    background-color: #61a120;
    transform: translateX(-50%);
  }

  @media (max-width: 560px) {
    margin-top: 28px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  align-items: start;
  gap: 24px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px 80px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 560px) {
    padding: 28px 14px 56px;
  }
`
