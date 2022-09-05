import React from "react";
import {
  ContainerMenu,
  MenuItem,
  MenuLink,
  Closebutton,
  SocialIcons,
} from "./styles";
import { CategoriesMobile, LinksMobile } from "../CategoryShowCase/categories";
import Arrow from "../../assets/Menu/arrowMenu.svg";
import Close from "../../assets/Close.svg";
import Facebook from "../../assets/Menu/facebook.svg";
import Twitter from "../../assets/Menu/twitter.svg";
import Tumblr from "../../assets/Menu/tumblr.svg";
import TikTok from "../../assets/Menu/tik_tok.svg";

const MobileMenu = () => {
  return (
    <ContainerMenu>
      <Closebutton>
        <div>
          <img src={Close} alt="close menu" />
        </div>
      </Closebutton>
      <ul>
        {CategoriesMobile.map((item) => {
          return (
            <a href={item.link}>
              <MenuItem key={item.id}>
                {item.title}
                <img src={Arrow} alt="" />
              </MenuItem>
            </a>
          );
        })}
      </ul>
      <hr />
      <ul>
        {LinksMobile.map((item) => {
          return <MenuLink key={item.id}>{item.label}</MenuLink>;
        })}
      </ul>
      <hr />
      <SocialIcons>
        <div>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Tumblr} alt="Tumblr" />
          <img src={TikTok} alt="TikTok" />
        </div>
      </SocialIcons>
    </ContainerMenu>
  );
};

export default MobileMenu;
