import styled from "styled-components";
import Select from "react-select"

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
`

export const SelectStatus = styled(Select)`
  width: 240px;

  @media (max-width: 600px) {
    width: 190px;
  }
`

export const Filter = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 0 28px;
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
`

export const FilterOption = styled.button`
  display: flex;
  flex-shrink: 0;
  padding: 8px 18px;
  border: 2px solid
    ${(props) => (props.$isActiveStatus ? props.theme.purple : "transparent")};
  border-radius: 999px;
  background-color: ${(props) =>
    props.$isActiveStatus ? props.theme.purple : props.theme.white};
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.white : props.theme.darkGray};
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(31, 31, 31, 0.06);
  transition:
    background-color 200ms,
    color 200ms,
    border-color 200ms;

  &:hover {
    border-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 600px) {
    padding: 7px 14px;
    font-size: 13px;
  }
`
