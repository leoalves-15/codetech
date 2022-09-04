import React, { useEffect, useState, FC } from "react";
import { ContainerNavBar, NavIcon } from "./styles";
import { MenuIcons } from "../Header/MenuItens";
import menu from "../../assets/Menu/menu.svg";
import { useScreen } from "../../hooks/use-screen";

const NavigationBar = () => {
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
    <ContainerNavBar>
      {icons?.map((item) => {
        return <NavIcon key={item.id} src={item.icon} alt={item.title} />;
      })}
    </ContainerNavBar>
  );
};

export default NavigationBar;
