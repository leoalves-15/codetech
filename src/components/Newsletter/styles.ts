import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerNewsletter = styled.div`
  display: flex;
  background: ${Colors.CorNewsletter};
  justify-content: center;
  height: 180px;
  align-items: center;
  width: 100vw;
  @media (max-width: 1250px){
    flex-direction: column;
  }
`;

export const ContainNewsletter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  >h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: ${Colors.CorFundoIMG};
  }
  input{
    padding: 0;
    padding-left: 20px;
    margin: 0;
    width: 470px;
    height: 38px;
    background: #FFFFFF;
    border: 0 solid #FFFFFF;
    border-radius: 12.5872px 0 0 12.5872px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%; 
      color: #9E8888;
    }
  }
  button{
    height: 37.42px;
    width: 150px;
    border: 1px solid #FFF;
    border-radius: 0 12.5872px 12.5872px 0;
    background: ${Colors.CorLogo4};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${Colors.CorFundoIMG};
  }
  >p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: ${Colors.CorFundoIMG};
  }
`;