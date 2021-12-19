import './Button.css';

export default function Button(props:any){
    return(
        <>
            <button className={`
            button 
            ${props.double? 'double': ''} 
            ${props.triple? 'triple': ''} 
            ${props.operation? 'operation': ''}
            `} onClick={_ => props.click && props.click() }>{props.label}</button>
        </>
    )
}