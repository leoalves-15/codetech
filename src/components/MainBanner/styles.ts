import styled from "styled-components";
import Colors from "../../Colors/Colors";

export const ContainerBanner = styled.div`
  width: 100%;
  height: 480px;
  img {
    width: 100%;
    object-fit: scale-down;
    margin-top: 70px;
  }
  @media (min-width: 800px) {
    background: ${Colors.CorBannerFundo};
  }
  @media (max-width: 800px) {
    height: 400px;
    max-height: 30%;
    img {
      margin-top: 0px;
    }
  }
`;

export const GradientContainer = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    height: 100%;
    background: ${Colors.CorBannerFundo};
    flex-direction: column;
    align-items: center;
  }
  background: ${Colors.BannerGradient};
`;

export const TitleBanner = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 57px;
  line-height: 67px;
  display: flex;
  align-items: center;
  color: ${Colors.CorTextoBranco};
  text-shadow: 0px 4px 84px rgba(0, 0, 0, 0.5);
  @media (min-width: 1100px) {
    width: 555px;
    margin-top: -400px;
    padding-left: 140px;
  }
  @media (max-width: 800px) {
    font-family: "Inter";
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    text-shadow: 0px 4px 84px rgba(0, 0, 0, 0.5);
  }
`;

export const BannerButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: ${Colors.CorTextoBranco};
  margin-top: 25px;
  border: none;
  width: 262px;
  height: 44px;
  background: linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
  border-radius: 12px;
  margin-left: 140px;

  @media (max-width: 800px) {
    margin-left: 0px;
    width: 191px;
    height: 32px;
    background: ${Colors.Banner};
    border-radius: 8px;
  }
`;
