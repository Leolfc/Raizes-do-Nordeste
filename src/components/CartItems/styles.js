import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(31, 31, 31, 0.08);

  @media (max-width: 640px) {
    border-radius: 0;
    overflow: visible;
    background-color: transparent;
    box-shadow: none;

    table,
    tbody {
      display: block;
      background-color: transparent;
    }

    thead {
      display: none;
    }

    tr {
      display: grid;
      grid-template-columns: 76px 1fr auto;
      grid-template-areas:
        "image name delete"
        "image price price"
        "divider divider divider"
        "quantity quantity total";
      grid-template-rows: auto auto 1px auto;
      align-items: center;
      gap: 6px 14px;
      margin-bottom: 14px;
      padding: 14px;
      border-radius: 16px;
      background-color: #fff;
      box-shadow: 0 6px 18px rgba(31, 31, 31, 0.08);
    }

    tr::after {
      content: "";
      grid-area: divider;
      height: 1px;
      margin-top: 6px;
      background-color: #f0f0f0;
    }

    td {
      padding: 0;
      border: none;
    }

    td:nth-child(1) {
      grid-area: image;
    }

    td:nth-child(2) {
      grid-area: name;
      font-weight: 600;
    }

    td:nth-child(3) {
      grid-area: price;
      font-size: 14px;
      color: #625e5e;
    }

    td:nth-child(4) {
      grid-area: quantity;
      padding-top: 6px;
    }

    td:nth-child(5) {
      grid-area: total;
      padding-top: 6px;
      text-align: right;
    }

    td:nth-child(6) {
      grid-area: delete;
      align-self: start;
    }
  }
`;

export const ProductImage = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: 14px;
  background-color: #f4f4f4;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    min-width: 20px;
    font-weight: 700;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background-color: #9758a6;
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    transition: background-color 200ms;

    &:hover {
      background-color: #6f357c;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 24px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(31, 31, 31, 0.08);
  text-align: center;

  svg {
    color: #9758a6;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    color: #363636;
  }

  a {
    margin-top: 8px;
    padding: 10px 28px;
    border-radius: 999px;
    background-color: #9758a6;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 200ms;

    &:hover {
      background-color: #6f357c;
    }
  }
`;

export const ProductTotalPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #9758a6;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  transition: background-color 200ms;

  img {
    width: 26px;
    height: 26px;
  }

  &:hover {
    background-color: #fdeaea;
  }
`;
