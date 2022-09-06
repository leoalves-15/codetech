import React, { useState } from "react";
import {
  ContainerNewsletter,
  ImputNewsLetter,
  ContainNewsletter,
} from "./styles";
import { sendNewsletter } from "../../utils/services/newsletter";
import Logo from "../../assets/logo.svg";
import { useScreen } from "../../hooks/use-screen";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const { isMobile } = useScreen();

  const valideEmail = (email: string) => {
    var rules = /\S+@\S+\.\S+/;
    return rules.test(email);
  };

  const Send = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (valideEmail(email)) {
      sendNewsletter(email);
    } else {
      window.alert("email incorreto");
    }
  };
  return (
    <ContainerNewsletter>
      {isMobile && (
        <ContainNewsletter>
          <img src={Logo} alt="logo" />
        </ContainNewsletter>
      )}
      <ContainNewsletter>
        <h3>
          Faça parte do clube Codetech e ganhe <br /> <b>10% de desconto</b> na
          sua primeira compra!
        </h3>
      </ContainNewsletter>
      <ContainNewsletter>
        <form onSubmit={Send}>
          <ImputNewsLetter
            erro={valideEmail(email)}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <button>Enviar</button>
        </form>
      </ContainNewsletter>
    </ContainerNewsletter>
  );
};

export default Newsletter;
