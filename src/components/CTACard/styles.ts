import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerCTACard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 222px;
`;

export const CTATitle = styled.h3`
  text-transform: uppercase;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${Colors.black};
  width: 180px;
  margin-left: 20px;
`;
