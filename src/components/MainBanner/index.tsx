import React from "react";
import { ContainerBanner, GradientContainer, TitleBanner, BannerButton } from "./styles";
import BannerMobile from "../../assets/BannerMobile.png";
import BannerDesk from "../../assets/BannerDesk.png";
import { useScreen } from "../../hooks/use-screen";

const MainBanner = () => {
  const { isMobile } = useScreen();

  return (
    <ContainerBanner>
      <GradientContainer>
        <img src={isMobile ? BannerMobile : BannerDesk} alt="" />
        <TitleBanner>Conheça a nova linha de tecnologia 6G</TitleBanner>
        <BannerButton>Saiba Mais</BannerButton>
      </GradientContainer>
    </ContainerBanner>
  );
};

export default MainBanner;
