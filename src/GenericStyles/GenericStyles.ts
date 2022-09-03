import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contain = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1226px;
  height: 100%;
  display: flex;
  width: 100%;
  @media (max-width: 800px){
    justify-content: flex-start;
  }
`;