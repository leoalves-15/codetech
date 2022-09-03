import styled from 'styled-components';
import Colors from '../../../../Colors/Colors'

export const ContainerRightsReserved = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-top: 1px solid #4F4F4F;
    >p{
        color: ${Colors.CorTextoBranco};
        text-align: center;
        font-family: 'Karla';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }
    @media (max-width: 800px){
        p{
            color: #4e4e4e;
            padding: 0px 20px;
            font-size: 14px;
        }
    }
`;
