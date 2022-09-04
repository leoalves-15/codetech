import React from "react";
import {
  ContainerHeader,
  TopBar,
  TopBarLink,
  TopBarIcons,
  ContainIcon,
  Menu,
  MenuLink,
  MenuIcon,
  Logo,
} from "./styles";
import logo from "../../assets/logo.svg";
import { TopBarLinks, TopBarSocial, MenuItens, MenuIcons } from "./MenuItens";

const Header = () => {
  return (
    <ContainerHeader>
      <TopBar>
        {TopBarLinks?.map((item) => {
          return (
            <TopBarLink key={item.id} target="_blank" href={item.link}>
              {item.label}
            </TopBarLink>
          );
        })}
        <ContainIcon>
          {TopBarSocial?.map((item) => {
            return (
              <a target="_blank" href={item.link} key={item.id}>
                <TopBarIcons src={item.src} alt={item.title} />
              </a>
            );
          })}
        </ContainIcon>
      </TopBar>
      <Menu>
        <div>
          <Logo src={logo} alt="logo" />
        </div>
        <div>
          {MenuItens?.map((item) => {
            return (
              <MenuLink key={item.id} target="_blank" href={item.link}>
                {item.label}
              </MenuLink>
            );
          })}
        </div>
        <div>
          {MenuIcons?.map((item) => {
            return <MenuIcon key={item.id} src={item.icon} alt={item.title} />;
          })}
        </div>
      </Menu>
    </ContainerHeader>
  );
};

export default Header;
