import styled from "styled-components";

export const Container = styled.div`
  padding: 56px 0 24px;

  .carousel-item {
    padding: 0 12px;
  }

  .react-multiple-carousel__arrow {
    z-index: 10;
    background-color: rgba(151, 88, 166, 0.85);
  }

  .react-multiple-carousel__arrow:hover {
    background-color: #6f357c;
  }

  @media (max-width: 560px) {
    padding-top: 40px;

    .carousel-item {
      padding: 0 8px;
    }
  }
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 14px;
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 800;
  color: #9758a6;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 56px;
    height: 4px;
    border-radius: 4px;
    background-color: #9758a6;
    transform: translateX(-50%);
  }

  @media (max-width: 560px) {
    margin-bottom: 28px;
  }
`;

export const ContainerItems = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 240px;
  padding: 18px;
  border-radius: 20px;
  overflow: hidden;
  background: url("${(props) => props.$imageUrl}");
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 24px rgba(31, 31, 31, 0.15);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  @media (max-width: 560px) {
    height: 200px;
    border-radius: 16px;
  }
`;

export const CategoryButton = styled.button`
  position: relative;
  z-index: 1;
  padding: 10px 24px;
  border: none;
  border-radius: 999px;
  background-color: rgba(31, 31, 31, 0.6);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  transition:
    background-color 200ms,
    transform 150ms;

  &:hover {
    background-color: #9758a6;
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 560px) {
    font-size: 16px;
    padding: 8px 20px;
  }
`;
