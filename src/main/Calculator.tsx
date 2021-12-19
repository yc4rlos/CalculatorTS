import { useState } from 'react';
import { Button, Display } from '../components/index';
import './Calculator.css';



export default function Calculator(){

    const [initialState, setInitialState] = useState({
        displayValue: "",
        clearDisplay: false,
        operation: undefined,
        values: [0, 0],
        current: 0
    });

    const clear = () => {
        console.log("Clean!");
    }

    const setOperation = (operation: string) => {
        console.log(operation)
    }

    const addDigitIn = (n: string) => {

        if(n === '.' && initialState.displayValue === '.'){
            return
        }

        const clearDisplay:boolean = initialState.displayValue === '0' || initialState.clearDisplay;

        const currentValue:string = clearDisplay ? '': initialState.displayValue;
        const displayValue = currentValue + n;

        setInitialState(prevState => {
            return {...prevState, displayValue}
        })

        if(n !== '.'){
            const i = initialState.current;
            const newValue:number = parseFloat(displayValue);

            const values:number[] = initialState.values;
            values[i] = newValue;
            setInitialState(prevState => {
               return {...prevState, values}
            });
            console.log(values);
        }
    }
    return (
        <div className="calculator">
            <Display value={initialState.displayValue} operation={initialState.operation} />
            <Button label="AC" operation triple click={() => clear()}/>
            <Button label="/" operation click={() => setOperation("/")}/>
            <Button label="7" click={() => addDigitIn("7")}/>
            <Button label="8" click={() => addDigitIn("8")}/>
            <Button label="9" click={() => addDigitIn("9")}/>
            <Button label="x" operation click={() => setOperation("x")}/>
            <Button label="4" click={() => addDigitIn("4")}/>
            <Button label="5" click={() => addDigitIn("5")}/>
            <Button label="6" click={() => addDigitIn("6")}/>
            <Button label="-" operation click={() => setOperation("-")}/>
            <Button label="1" click={() => addDigitIn("1")}/>
            <Button label="2" click={() => addDigitIn("2")}/>
            <Button label="3" click={() => addDigitIn("3")}/>
            <Button label="+" operation click={() => setOperation("+")}/>
            <Button label="0" double click={() => addDigitIn("0")}/>
            <Button label="." click={() => addDigitIn(".")}/>
            <Button label="=" operation />
        </div>
    )
}