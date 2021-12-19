import './Display.css'

export default function Display(props: any) {
    return (
        <div className="display">
            <div className="value"> 
            {props.value}
            </div>
            <div className="operation">
            {props.operation}
            </div>
        </div>
    )
}