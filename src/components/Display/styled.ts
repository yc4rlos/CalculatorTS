import styled from 'styled-components';

export const Display = styled.div`
    grid-column: span 4;
    background-color: #d3d3d380;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    padding: 20px;

    overflow: hidden;
`;

export const Value = styled.div`
    font-size: 32px;
`;

export const CurrentOperation = styled.div`
    margin-left: 10px;
    font-size: 15px;
`;