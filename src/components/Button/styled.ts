import styled, {css} from 'styled-components';

interface IActive{
    operation?: boolean;
    double?: boolean;
    triple?: boolean;
}

export const Button = styled.button<IActive>`
    font-size: 1.4em;
    background-color: white;
    border: none;
    border-right: solid 1px #888;
    border-bottom: solid 1px #888;
    outline: none;
    width: 100%;
    height: 100%;
    :active{
        background-color: rgb(204, 215, 221);
    }
    ${(props:any) => props.operation && css`
        background-color: rgb(204, 215, 221);
        :active{
            background-color: rgb(167, 182, 190);
        }
    `}
    ${(props:any) => props.double && css`
        grid-column: span 2;
    `}
    ${(props:any) => props.triple && css`
        grid-column: span 3;
    `}
`;