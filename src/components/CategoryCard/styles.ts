import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const CategoryContainer = styled.div`
    width: 122px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const CatgeoryTitle = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 13.8932px;
    line-height: 17px;
    text-align: center;
    color: #B7B7B7;
    margin:0;
`;

export const CircleImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104.2px;
    height: 102.73px;
    left: 167px;
    border-radius: 50%;
    top: 17.51px;
    background: linear-gradient(180deg, rgba(110, 118, 71, 0.17) 11.46%, #2F2F2D 100%);
    border: 3.47329px solid ${Colors.CorLogo};
    box-shadow: 0px 0px 8.68322px 0.868322px ${Colors.CorLogo};
    margin-bottom: 20px;
    margin-right: 0px;
    >img{
        width: 100px;
        height: 100px;
    }
    &:hover{
        >img{
            margin-bottom: 20px;
    }
    }
`;