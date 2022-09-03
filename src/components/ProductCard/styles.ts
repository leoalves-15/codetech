import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerCard = styled.div`
  width: 287px;
  height: 464px;
  background: ${Colors.Card};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
    @media (max-width: 800px) {
      width: 159px;
      height: 298px;
    }
`;

export const ContainerIMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 222.75px;
  background-color: ${Colors.CorFundoIMG};
  border-radius: 10px 10px 0px 0px;
  >img{
    width: 254px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }
    @media (max-width: 800px) {
      >img{
        width: 100%;
        height: 128.13px;
      }
      width: 160.14px;
      height: 123.86px;
    }
`;

export const ProductTitle = styled.div`
  padding: 2px 16px;
  >p{
    height: 66px ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
    @media (max-width: 800px) {
      >p{
        -webkit-line-clamp: 2;
      }
    }
`;

export const ProductPrice = styled.div`
  padding: 2px 16px;
  >p{
    font-family: 'Inter';
    font-style: normal;
    margin: 1px 0 0 0;
  }
  >p:first-child{
    text-decoration-line: line-through;
    color: ${Colors.listPrice};
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
  >p:nth-child(2){
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  } 
`;

export const BuyButton = styled.button`
  cursor: pointer;
  width: 256px;
  height: 38px;
  background: ${Colors.BotaoMaster};
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${Colors.CorTextoBranco};
  margin-top: 19px;
  border-radius: 4px;
  @media (max-width: 800px){
    border-radius: 8px;
    margin-top: 10px;
    width: 122px;
    height: 39px;
  }
`;