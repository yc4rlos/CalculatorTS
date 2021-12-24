import styled from 'styled-components';

export const Calculator = styled.div`
    height: 300px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden; 
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 50px 50px 50px 50px 50px;
`;
