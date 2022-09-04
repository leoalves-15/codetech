import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 441px;
  background: ${Colors.black};
  @media (max-width: 800px){
    height: 1250px;
  }
`;

export const AlingCertifications = styled.div`
  a{
    display: flex;
    align-items: center;
  }
`;

export const ContainerSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    a{
      height: 50px;
      display: flex;
    }
    img {
      width: 20px;
    }
`;

export const FooterBox = styled.div`
  @media (max-width: 800px){
    padding: 30px 0 30px 23px;
    border-top: 1px solid #202020;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-child{
    padding-top: 68px;
  }
  @media (max-width: 800px){
    flex-direction: column;
  }
`;

export const ColumnTitle = styled.h2`
  margin-top: 0;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.CorTextoBranco};
  @media (max-width: 800px){
    margin-bottom: 30px;
  }
`;
