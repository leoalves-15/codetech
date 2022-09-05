import styled from 'styled-components';
import Colors from '../../../../Colors/Colors';

export const ContainerColumn = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0px;
`;

export const Item = styled.li`
    margin-bottom: 15px;
  >a{
    color: ${Colors.CorTextoBranco};
    font-family: 'Karla';
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;
  }
  &:last-child{
    margin-bottom: 0;
  }
  @media (max-width: 800px){
    >a{
      color: ${Colors.Paragrafos};
    }
  }
`;
