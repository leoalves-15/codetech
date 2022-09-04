import React from "react";
import {
  ContainerFooter,
  FooterRow,
  ColumnTitle,
  FooterBox,
  ContainerSocial,
  AlingCertifications,
} from "./styles";
import Column from "./components/Column";
import ImagesComponent from "./components/ImagesComponent";
import RightsReserved from "./components/RightsReserved";
import {
  columns,
  paymentFlags,
  certifications,
  socialFooter,
} from "./footerDatas";
import Logo from "../../assets/logo.svg";
import { useScreen } from "../../hooks/use-screen";
import { Contain } from "../../GenericStyles/GenericStyles";

const Footer = () => {
  const {isMobile} = useScreen();

  return (
    <ContainerFooter>
      <Contain>
        {isMobile && (
          <ContainerSocial>
            <ImagesComponent images={socialFooter} />
          </ContainerSocial>
        )}
        <FooterRow>
          {!isMobile && (
            <div>
              <ImagesComponent images={[{ id: 1, src: Logo, title: "Logo" }]} />
            </div>
          )}
          {columns?.map((column) => (
            <FooterBox key={column?.id}>
              <ColumnTitle>{column.title} </ColumnTitle>
              <Column links={column.links} />
            </FooterBox>
          ))}
          {!isMobile && (
            <FooterBox>
              <ColumnTitle>Métodos de pagamento </ColumnTitle>
              <ImagesComponent images={paymentFlags} />
            </FooterBox>
          )}
        </FooterRow>
        <div>
          <FooterBox>
              {isMobile && <ColumnTitle>Selos</ColumnTitle>}
            <AlingCertifications>
              <ImagesComponent images={certifications} />
            </AlingCertifications>
          </FooterBox>
          {isMobile && (
            <FooterBox>
              <ColumnTitle>Métodos de pagamento </ColumnTitle>
              <ImagesComponent images={paymentFlags} />
            </FooterBox>
          )}
        </div>
        <FooterRow>
          <RightsReserved Text="Todos os direitos reservados © 2020 - Time Codeby Hackathon - 2022" />
        </FooterRow>
      </Contain>
    </ContainerFooter>
  );
};

export default Footer;
