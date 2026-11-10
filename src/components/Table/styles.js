import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: #484848;
`;

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;
  vertical-align: middle;
  border-bottom: 1px solid #f0f0f0;
`;

export const Body = styled.tbody`
  tr:last-child td {
    border-bottom: none;
  }
`;
