import user from "../../assets/Menu/User.svg";
import glass from "../../assets/Menu/Glass.svg";
import cart from "../../assets/Menu/Cart.svg";
import instagram from "../../assets/social/instagram.svg";
import facebook from "../../assets/social/facebook.svg";

export const MenuItens = [
  { id: 1, label: "Todos os departamentos", link: "" },
  { id: 2, label: "Lançamentos", link: "" },
  { id: 3, label: "Destaques", link: "" },
  { id: 4, label: "PC Gamer", link: "" },
  { id: 5, label: "Eletrônicos", link: "" },
  { id: 6, label: "Ofertas", link: "" },
];

export const MenuIcons = [
  { id: 1, title: "search", link: "", icon: glass },
  { id: 2, title: "myaccount", link: "", icon: user },
  { id: 3, title: "Cart", link: "", icon: cart },
];

export const TopBarLinks = [
  { id: 1, label: "Institucional", link: "" },
  { id: 2, label: "Contato", link: "" },
];

export const TopBarSocial = [
  {
    id: 1,
    src: instagram,
    title: "instagram",
    link: "www.google.com",
  },
  {
    id: 2,
    src: facebook,
    title: "facebook",
    link: "www.google.com",
  },
];
