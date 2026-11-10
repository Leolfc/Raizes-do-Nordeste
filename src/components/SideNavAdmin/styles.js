import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.mainBlack};

  > img {
    width: 60%;
    margin: 40px 0;
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    position: sticky;
    top: 0;
    z-index: 1100;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "logo . footer"
      "links links links";
    align-items: center;
    height: auto;
    padding: 10px 12px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);

    > img {
      grid-area: logo;
      width: 44px;
      margin: 0;
      border-radius: 10px;
    }
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 900px) {
    grid-area: links;
    flex-direction: row;
    gap: 4px;
    margin-top: 8px;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  border-left: 4px solid
    ${(props) => (props.$isActive ? props.theme.purple : "transparent")};
  background-color: ${(props) =>
    props.$isActive ? "rgba(151, 88, 166, 0.2)" : "transparent"};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  transition: background-color 200ms;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 900px) {
    flex-shrink: 0;
    gap: 8px;
    padding: 12px 14px;
    border-left: none;
    border-bottom: 3px solid
      ${(props) => (props.$isActive ? props.theme.purple : "transparent")};
    background-color: transparent;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  @media (max-width: 900px) {
    grid-area: footer;
    width: auto;
    margin-top: 0;

    a {
      padding: 8px 12px;
      border-bottom: none;
      border-radius: 8px;
    }
  }
`;
