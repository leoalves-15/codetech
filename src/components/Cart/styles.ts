import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainCart = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${Colors.Card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:800px){
    margin-bottom: 60px;
  }
`;

export const OrderResume = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;
