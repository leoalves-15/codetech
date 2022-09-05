import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContanerShowCase = styled.div``;

export const TitleShowCase = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${Colors.black};
  margin-left: 25px;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin-left: 10px;
  }
`;

export const ContainCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  @media (max-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  > div {
    margin-bottom: 10px;
  }
`;

export const ContainCardsB = styled(ContainCards)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  >div{
    margin-left: 10px;
  }
`;
