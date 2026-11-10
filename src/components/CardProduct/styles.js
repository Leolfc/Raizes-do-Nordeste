import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  height: 100%;
  padding: 76px 20px 20px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 8px 24px rgba(31, 31, 31, 0.08);
  transition:
    transform 250ms,
    box-shadow 250ms;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(31, 31, 31, 0.14);
  }

  &:hover > img {
    transform: translateX(-50%) scale(1.06);
  }

  @media (max-width: 560px) {
    gap: 12px;
    padding: 56px 12px 12px;
    border-radius: 16px;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: -56px;
  left: 50%;
  height: 120px;
  max-width: 85%;
  object-fit: contain;
  transform: translateX(-50%);
  filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.2));
  transition: transform 250ms;
  z-index: 1;

  @media (max-width: 560px) {
    top: -44px;
    height: 90px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  flex: 1;

  p {
    font-size: 18px;
    font-weight: 600;
    color: #ff8c05;
    line-height: 1.25;
  }

  strong {
    font-size: 22px;
    font-weight: 800;
    color: #363636;
    line-height: 1;
  }

  @media (max-width: 560px) {
    gap: 6px;

    p {
      font-size: 14px;
    }

    strong {
      font-size: 17px;
    }
  }
`;
