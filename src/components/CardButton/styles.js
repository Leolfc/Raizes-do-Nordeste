import styled from "styled-components"

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #9758a6;
  color: white;
  transition:
    background-color 200ms,
    transform 150ms;

  img {
    height: 26px;
  }

  &:hover {
    background-color: #6f357c;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 560px) {
    height: 42px;
    border-radius: 10px;

    img {
      height: 22px;
    }
  }
`
