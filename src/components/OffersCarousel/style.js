import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0 72px;
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  .carousel-item {
    padding: 70px 12px 16px;
  }

  .react-multiple-carousel__arrow {
    z-index: 10;
    top: 0;
    background-color: rgba(97, 161, 32, 0.9);
  }

  .react-multiple-carousel__arrow:hover {
    background-color: #4d8418;
  }

  .react-multiple-carousel__arrow--left {
    left: 12px;
  }

  .react-multiple-carousel__arrow--right {
    right: 12px;
  }

  @media (max-width: 560px) {
    padding-bottom: 48px;

    .carousel-item {
      padding: 56px 8px 12px;
    }
  }
`;

export const Title = styled.h2`
  position: relative;
  margin-bottom: 16px;
  padding-bottom: 14px;
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 800;
  color: #61a120;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 56px;
    height: 4px;
    border-radius: 4px;
    background-color: #61a120;
    transform: translateX(-50%);
  }
`;
