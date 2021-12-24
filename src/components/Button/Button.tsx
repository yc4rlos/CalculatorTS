import * as S from './styled';

export default function Button(props:any){
    const operation:boolean = (props.operation ? true: false);
    const double:boolean = (props.double ? true: false);
    const triple:boolean = (props.triple ? true: false);
    return(
        <>
            <S.Button operation={operation} double={double} triple={triple} onClick={() => props.click && props.click() }>{props.label}</S.Button>
        </>
    )
} 