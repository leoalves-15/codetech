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
  SearchBar,
} from "./styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
import { TopBarLinks, TopBarSocial, MenuItens, MenuIcons } from "./MenuItens";
import { useScreen } from "../../hooks/use-screen";

const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreen();
  const search = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {!isMobile ? (
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
            <nav>
              {MenuItens?.map((item) => {
                return (
                  <MenuLink key={item.id} target="_blank" href={item.link}>
                    {item.label}
                  </MenuLink>
                );
              })}
            </nav>
            <div>
              {MenuIcons?.map((item) => {
                return (
                  <MenuIcon key={item.id} src={item.icon} alt={item.title} onClick={() => {navigate(`./${item.title}`)}}/>
                );
              })}
            </div>
          </Menu>
        </ContainerHeader>
      ) : (
        <ContainerHeader>
          <form onSubmit={(e) => search(e)}>
            <label>
              <SearchBar placeholder="Oque você procura?" />
            </label>
          </form>
          <div>
            <Logo src={logo} alt="logo" />
          </div>
        </ContainerHeader>
      )}
    </>
  );
};

export default Header;
