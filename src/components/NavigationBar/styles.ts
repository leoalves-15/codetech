import styled from "styled-components";
import { MenuIcon } from "../Header/styles";
import Colors from "../../Colors/Colors";

export const Border = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  height: 68px;
  background: ${Colors.Botao};
  /* border: 1px solid transparent;
  border-image: ${Colors.Botao};
  border-image-slice: 1; */
  border-radius: 25px 25px 0px 0px;
  box-shadow: 0px -6px 12px rgba(19, 19, 19, 0.35);
`;

export const ContainerNavBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 99%;
  margin-left: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-evenly;
  height: 66px;
  background: ${Colors.CorFundo};
  border-radius: 25px 25px 0px 0px;
`;

export const NavIcon = styled(MenuIcon)`
  margin: 0;
  height: 20px;
  width: 20px;
`;

