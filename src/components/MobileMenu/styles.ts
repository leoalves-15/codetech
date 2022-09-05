import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const Closebutton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  div {
    display: flex;
    justify-content: flex-end;
    width: 80%;
  }
`;

export const ContainerMenu = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.CorFundo};
  padding: 0px;
  > ul {
    padding: 3% 10%;
    margin: 0;
    a {
      text-decoration: none;
    }
  }
  hr {
    width: 80%;
    border: 1px solid rgba(90, 90, 90, 0.3);
    box-shadow: 0px 0px 10px rgba(215, 250, 25, 0.4);
  }
  hr:nth-child(2) {
    border: 1px solid #ae16d7;
    box-shadow: 0px 0px 10px rgba(215, 250, 25, 0.4);
  }
`;

export const MenuLink = styled.li`
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 19px;
  color: ${Colors.Paragrafos};
`;

export const MenuItem = styled.li`
  margin-bottom: 20px;
  width: 100%;
  color: ${Colors.CorTextoBranco};
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${Colors.Titulos};
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  > div {
    width: 80%;
    > img {
      margin-right: 10px;
    }
  }
`;
