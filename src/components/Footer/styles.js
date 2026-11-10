import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  margin-top: auto;
  padding: 24px 16px;
  background-color: ${(props) => props.theme.darkPurple};
  text-align: center;

  strong {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 28px;
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }

  p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 13px;
    font-weight: 400;
  }
`;
