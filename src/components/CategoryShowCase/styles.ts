import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerShowCase = styled.div`
    display: flex;
    align-items: center;
    background: #200528;
    height: 280px;
    justify-content: space-evenly;
    margin-bottom: 50px;
    @media (max-width: 800px){
        height: 200px;
    }
`;
