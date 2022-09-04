import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 140px;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    /* remover */
    background: black;
  }
  > form label {
    position: relative;
  }
  > form label:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M6.70879 0.666992C7.84872 0.666968 8.96472 0.993939 9.9244 1.60911C10.8841 2.22428 11.6472 3.10184 12.1231 4.13765C12.599 5.17347 12.7678 6.32407 12.6095 7.45294C12.4512 8.58182 11.9723 9.64158 11.2298 10.5065L16.4035 15.6802L15.7554 16.3282L10.5808 11.1537C9.85101 11.7777 8.9812 12.2162 8.04545 12.4317C7.1097 12.6472 6.13573 12.6333 5.2065 12.3913C4.27726 12.1492 3.42028 11.6862 2.70856 11.0416C1.99683 10.397 1.45145 9.58994 1.11884 8.68914C0.78624 7.78834 0.676278 6.8205 0.798321 5.86804C0.920364 4.91559 1.2708 4.00674 1.81977 3.2189C2.36875 2.43107 3.10001 1.78758 3.95126 1.34325C4.80252 0.898925 5.74855 0.666918 6.70879 0.666992ZM6.70879 1.58366C5.37166 1.58366 4.08929 2.11483 3.1438 3.06033C2.1983 4.00583 1.66713 5.28819 1.66713 6.62533C1.66713 7.96246 2.1983 9.24483 3.1438 10.1903C4.08929 11.1358 5.37166 11.667 6.70879 11.667C8.04593 11.667 9.32829 11.1358 10.2738 10.1903C11.2193 9.24483 11.7505 7.96246 11.7505 6.62533C11.7505 5.28819 11.2193 4.00583 10.2738 3.06033C9.32829 2.11483 8.04593 1.58366 6.70879 1.58366Z'%3E%3C/path%3E%3C/svg%3E")
      center / contain no-repeat;
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
  @media (max-width: 800px) {
    width: 71px;
  }
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

export const SearchBar = styled.input`
  border: none;
  width: 316px;
  padding: 0;
  height: 38px;
  left: 35px;
  top: 38px;
  padding-left: 10px;
  background: ${Colors.CorFundoIMG};
  border-radius: 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #9e8888;
  }
`;
