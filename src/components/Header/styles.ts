import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 140px;
  @media (max-width: 800px) {
  }
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background: ${Colors.CorHeader};
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
  }
`;

export const TopBarLink = styled.a`
  font-family: "Inter";
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${Colors.Titulos};
  margin-right: 30px;
  &:hover {
    color: ${Colors.CorLogo};
  }
`;

export const TopBarIcons = styled.img`
  width: 15px;
  height: 15px;
`;

export const ContainIcon = styled.div`
  display: flex;
  > a {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 25px;
    &:first-child {
      margin-left: 0px;
    }
    &:last-child {
      margin-right: 146px;
    }
  }
`;

export const Menu = styled.div`
  height: 95px;
  display: flex;
  align-items: center;
  background: black;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  height: 77px;
  width: 104px;
  cursor: pointer;
`;

export const MenuLink = styled(TopBarLink)`
  margin-right: 60px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 45px;
  cursor: pointer;
`;
