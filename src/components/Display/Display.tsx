import * as S from './styled';

export default function Display(props: any) {
    return (
        <S.Display>
            <S.Value className="value"> 
            {props.value}
            </S.Value>
            <S.CurrentOperation className="currentOperation">
            {props.operation}
            </S.CurrentOperation>
        </S.Display>
    )
}