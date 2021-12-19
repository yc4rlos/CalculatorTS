import { useState } from 'react';
import { Button, Display } from '../components/index';
import './Calculator.css';

export default function Calculator() {

    const [initialState, setInitialState] = useState({
        displayValue: '0',
        clearDisplay: false,
        operation: "",
        values: [0, 0],
        current: 0
    });

    const clear = () => {
        setInitialState({
            displayValue: '0',
            clearDisplay: false,
            operation: "",
            values: [0, 0],
            current: 0
        });
    }

    const setOperation = (operation: string) => {
        if ((initialState.operation === '/' && operation === '/') || ((initialState.values[1] === 0) && (initialState.operation === 'x' && operation === '/')) || ((initialState.values[1] === 0) && (initialState.operation === '/' && operation === 'x'))) {
            return;
        } else if (initialState.current === 0 && operation !== '=') {
            setInitialState(prevState => {
                return { ...prevState, current: 1, clearDisplay: true, operation }
            });
        } else {
            const equals: boolean = (operation === '=');
            const currentOperation: string = initialState.operation;

            const values: number[] = initialState.values;
            switch (currentOperation) {
                case '+':
                    values[0] = values[0] + values[1];
                    break;

                case '-':
                    values[0] = values[0] - values[1];
                    break;

                case 'x':
                    values[0] = values[0] * values[1];
                    break;

                case '/':
                    values[0] = values[0] / values[1];
                    break;
            }
            values[1] = 0;
            let displayValue = values[0].toString() === "NaN"? "Error" : values[0].toString();
            setInitialState(prevState => {
                return {
                    ...prevState,
                    values,
                    displayValue,
                    operation: equals ? "" : operation,
                    current: equals ? 0 : 1,
                    clearDisplay: equals
                }
            });
        }
    }

    const addDigitIn = (n: string) => {

        if (n === '.' && initialState.displayValue === '.') {
            return;
        }

        const clearDisplay: boolean = initialState.displayValue === '0' || initialState.clearDisplay;

        const currentValue: string = clearDisplay ? '' : initialState.displayValue;
        const displayValue = currentValue + n;

        setInitialState(prevState => {
            return { ...prevState, displayValue, clearDisplay: false }
        })

        if (n !== '.') {
            const i: number = initialState.current;
            const newValue: number = parseFloat(displayValue);

            const values: number[] = initialState.values;
            values[i] = newValue;
            setInitialState(prevState => {
                return { ...prevState, values }
            });
        }
    }
    return (
        <div className="calculator">
            <Display value={initialState.displayValue} operation={initialState.operation} />
            <Button label="AC" operation triple click={() => clear()} />
            <Button label="/" operation click={() => setOperation("/")} />
            <Button label="7" click={() => addDigitIn("7")} />
            <Button label="8" click={() => addDigitIn("8")} />
            <Button label="9" click={() => addDigitIn("9")} />
            <Button label="x" operation click={() => setOperation("x")} />
            <Button label="4" click={() => addDigitIn("4")} />
            <Button label="5" click={() => addDigitIn("5")} />
            <Button label="6" click={() => addDigitIn("6")} />
            <Button label="-" operation click={() => setOperation("-")} />
            <Button label="1" click={() => addDigitIn("1")} />
            <Button label="2" click={() => addDigitIn("2")} />
            <Button label="3" click={() => addDigitIn("3")} />
            <Button label="+" operation click={() => setOperation("+")} />
            <Button label="0" double click={() => addDigitIn("0")} />
            <Button label="." click={() => addDigitIn(".")} />
            <Button label="=" operation click={() => setOperation("=")} />
        </div>
    )
}