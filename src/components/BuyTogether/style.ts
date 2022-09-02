import styled from 'styled-components';
import {ContainerCard, ContainerIMG, ProductTitle, ProductPrice} from '../ProductCard/styles';
import Colors from '../../Colors/Colors';

export const ContainerBuyTogether = styled(ContainerCard)`
  width: 551px;
  height: 457px;
  background: ${Colors.CorFundoIMG};
    @media (max-width: 800px) {
        width: 333px;
        height: 328px;
    }
`;

export const IMGBuyTogether = styled(ContainerIMG)`
    height: 256px;
  >img:first-child{
    width: 362px;
    height: 256px;
    margin-top: 36px;
    margin-bottom: 10px;
  }
  >img:nth-child(2){
    width: 179px;
    height: 175px;
    object-fit: contain;
    position: absolute;
    left: 360px;
    top: 150px;
  }
    @media (max-width: 800px) {
      >img:first-child{
        width: 100%;
        height: 128.13px;
      }
      width: 160.14px;
      height: 123.86px;
    }
`;

export const PriceBuyTogether = styled(ProductPrice)`
    >p{
        text-align: center;
    }
`;

export const TitleBuyTogether = styled(ProductTitle)`
    >p{
        text-align: center;
        height: 42px;
    }
`;