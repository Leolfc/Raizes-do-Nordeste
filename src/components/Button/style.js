import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 12px;
  background-color: #9758a6;
  font-family: "Road Rage", sans-serif;
  font-size: 30px;
  color: white;
  box-shadow: 0 8px 20px rgba(151, 88, 166, 0.35);
  transition:
    background-color 200ms,
    transform 150ms,
    box-shadow 200ms;

  &:hover {
    background-color: #6f357c;
    box-shadow: 0 10px 24px rgba(111, 53, 124, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    height: 50px;
    font-size: 26px;
  }
`;
