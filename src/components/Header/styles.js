import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1100;
  width: 100%;
  background-color: rgba(31, 31, 31, 0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  height: 72px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    height: 64px;
    padding: 0 16px;
    gap: 16px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 52px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    img {
      height: 44px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 20px 24px;
    background-color: ${(props) => props.theme.mainBlack};
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.35);
    opacity: ${(props) => (props.$open ? 1 : 0)};
    visibility: ${(props) => (props.$open ? "visible" : "hidden")};
    transform: translateY(${(props) => (props.$open ? "0" : "-12px")});
    transition:
      opacity 200ms,
      transform 200ms,
      visibility 200ms;
  }
`;

export const HeaderLink = styled(Link)`
  position: relative;
  padding: 6px 0;
  color: ${(props) => (props.$isActive ? props.theme.purple : props.theme.white)};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: color 200ms;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 3px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.purple};
    transition: width 200ms;
  }

  &:hover {
    color: ${(props) => props.theme.purple};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 16px 4px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    &::after {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  font-size: 14px;

  > svg {
    color: ${(props) => props.theme.purple};
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  p {
    color: ${(props) => props.theme.white};
    line-height: 1.2;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 20px;
  }
`;

export const Logout = styled.button`
  align-self: flex-start;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.red};
  font-size: 13px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginLink = styled(Link)`
  color: ${(props) => props.theme.white};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid rgba(151, 88, 166, 0.5);
  background-color: ${(props) =>
    props.$isActive ? props.theme.purple : "rgba(151, 88, 166, 0.12)"};
  color: ${(props) => props.theme.white};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 200ms;

  svg {
    color: ${(props) => (props.$isActive ? props.theme.white : props.theme.purple)};
    transition: color 200ms;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    span {
      display: none;
    }
  }
`;

export const Badge = styled.strong`
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.mainBlack};
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  font-size: 11px;
  font-weight: 700;
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    display: flex;
  }
`;
