import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainerNewsletter = styled.div`
  display: flex;
  background: ${Colors.CorNewsletter};
  justify-content: center;
  height: 180px;
  align-items: center;
  width: 100%;
  @media (max-width: 1250px) {
    margin-top: 0px;
    flex-direction: column;
    height: 325.84px;
  }
`;

export const ContainNewsletter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  > form {
    @media (max-width: 1250px) {
      display: flex;
      flex-direction: column;
    }
  }
  > h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: ${Colors.CorTextoBranco};
    @media (max-width: 1250px) {
      width: 300px;
      font-size: 16px;
    }
  }
  button {
    height: 37.42px;
    width: 150px;
    border: 1px solid #fff;
    border-radius: 0 12.5872px 12.5872px 0;
    background: ${Colors.CorLogo4};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${Colors.CorTextoBranco};
    @media (max-width: 1250px) {
      width: 100%;
      margin-top: 16px;
      border-radius: 6px;
      border: 0;
    }
  }
  > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: ${Colors.CorTextoBranco};
  }
`;

export const ImputNewsLetter = styled.input`
  padding: 0;
  padding-left: 20px;
  margin: 0;
  width: 470px;
  height: 38px;
  background: ${Colors.CorFundoIMG};
  border: 0 solid #ffffff;
  border-radius: 12.5872px 0 0 12.5872px;
  color: ${(props) => (!props.erro ? "red;" : "#9e8888")};
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
  @media (max-width: 1250px) {
    width: 278.12px;
    border-radius: 6px;
    background: #e4e2e4;
    &::placeholder {
      font-size: 12px;
    }
  }
`;