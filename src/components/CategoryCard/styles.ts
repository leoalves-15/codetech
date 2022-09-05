import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const CategoryContainer = styled.div`
  width: 122px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    padding-right: 22px;
  }
`;

export const CatgeoryTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13.8932px;
  line-height: 17px;
  text-align: center;
  color: ${Colors.Paragrafos};
  margin: 0;
  @media (max-width: 800px) {
    font-size: 8.44977px;
  }
`;

export const CircleImg = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104.2px;
  height: 102.73px;
  left: 167px;
  border-radius: 50%;
  top: 17.51px;
  background: linear-gradient(
    180deg,
    rgba(110, 118, 71, 0.17) 11.46%,
    #2f2f2d 100%
  );
  border: 3.47329px solid ${Colors.CorLogo};
  box-shadow: 0px 0px 8.68322px 0.868322px ${Colors.CorLogo};
  margin-bottom: 20px;
  margin-right: 0px;
  @media (max-width: 800px) {
    height: 63px;
    width: 63px;
  }
  > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    @media (max-width: 800px) {
      height: 62.48px;
      width: 62.48px;
    }
  }
  &:hover {
    > img {
      margin-bottom: 20px;
    }
  }
`;
