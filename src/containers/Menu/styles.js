import styled from "styled-components";
import bannerMenu from "../../assets/banner-menu.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url("${Background}");
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 480px;
  padding: 0 12%;
  background:
    linear-gradient(270deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%),
    url(${bannerMenu}) no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #1f1f1f;

  h1 {
    color: white;
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 0.85;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);

    span {
      display: block;
      margin-top: 24px;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    height: 380px;
    padding: 36px 20px 0;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 70%),
      url(${bannerMenu}) no-repeat;
    background-position: 25% center;
    background-size: cover;
    text-align: center;

    h1 {
      font-size: 54px;

      span {
        margin-top: 14px;
        font-size: 15px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  gap: 12px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 8px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > :first-child {
    margin-left: auto;
  }

  & > :last-child {
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 24px 16px 8px;
  }
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 10px 24px;
  border-radius: 999px;
  border: 2px solid
    ${(props) => (props.$isActiveCategory ? "#9758a6" : "transparent")};
  background-color: ${(props) => (props.$isActiveCategory ? "#9758a6" : "#fff")};
  color: ${(props) => (props.$isActiveCategory ? "#fff" : "#54545e")};
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(31, 31, 31, 0.08);
  transition:
    background-color 200ms,
    color 200ms,
    border-color 200ms;

  &:hover {
    border-color: #9758a6;
    color: ${(props) => (props.$isActiveCategory ? "#fff" : "#9758a6")};
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 96px 32px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 24px 80px;

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 72px 14px;
    padding: 76px 14px 56px;
  }
`;
