import React, { useEffect, useState, FC } from "react";
import { ContainerNavBar, NavIcon, Border } from "./styles";
import { MenuIcons } from "../Header/MenuItens";
import menu from "../../assets/Menu/menu.svg";
import { useScreen } from "../../hooks/use-screen";
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreen();
  const [icons, setIcons] = useState<typeof MenuIcons>([]);

  useEffect(() => {
    const MenuIconsAux = [...MenuIcons];
    if (isMobile) {
      MenuIconsAux.unshift({ id: 0, title: "menu", link: "", icon: menu });
    }
    setIcons(MenuIconsAux);
  }, [isMobile]);

  return (
    <Border>
      <ContainerNavBar>
        {icons?.map((item) => {
          return <NavIcon onClick={() => {navigate(`/${item.title}`)}} key={item.id} src={item.icon} alt={item.title} />;
        })}
      </ContainerNavBar>
    </Border>
  );
};

export default NavigationBar;
