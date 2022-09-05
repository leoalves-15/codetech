import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainerBTShowCase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  justify-content: space-around;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const ShowMore = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.381818px;
  color: ${Colors.CorFundo};
  width: 177px;
  height: 39px;
  border: none;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ffffff;
  border-radius: 8px;
`;

export const ContainerBTN = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
