import styled from 'styled-components';

export const ContainerImagesComponent = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 800px){
        justify-content: flex-start;
    }
    a{
        margin-right: 10px;
        &:last-child{
            margin-right: 0;
        }
    }
`;
