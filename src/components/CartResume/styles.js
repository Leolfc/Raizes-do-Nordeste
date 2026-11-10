import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 960px) {
    position: static;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 8px 24px rgba(31, 31, 31, 0.08);

  h2 {
    padding: 16px;
    background-color: #484848;
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  p {
    color: #625e5e;
    font-size: 15px;
    font-weight: 500;
  }

  p:last-child {
    color: #363636;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 20px 0;
  padding: 16px 0 20px;
  border-top: 1px dashed #cdcdcd;

  p {
    color: #363636;
    font-size: 20px;
    font-weight: 700;
  }

  p:last-child {
    color: #9758a6;
  }
`;
