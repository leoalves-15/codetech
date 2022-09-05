import styled from 'styled-components';
import Colors from '../../Colors/Colors'

export const ContainerSlider = styled.div`
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    height: 200px;
    padding-left: 45px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

export const Dots = styled.div`
    width: 5px;
    height: 5px;
    background: ${Colors.FundoCompra};
    border-radius: 100%;
    margin-right: 12px;
    &:last-child{
        margin-right: 0px;
    }
`;

export const ContainSlider = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-direction: column;
`;

export const ContainDots = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    margin-top: -30px;
    justify-content: center;
    .active{
        width: 10px;
        background: #AE16D7;
        border-radius: 8px;
    }
`;