import styled from "styled-components";
import Colors from "../../../../Colors/Colors";

export const ContainCartItem = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #202020;
  background: ${Colors.Card};
  display: flex;
  align-items: center;
  padding-bottom:10px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  display: flex;
  font-family: "Inter";
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${Colors.Titulos};
`;

export const ProductTitle = styled.h3`
  width: 100%;
  margin: 8px 0;
  display: flex;
`;