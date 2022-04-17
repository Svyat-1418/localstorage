import React, {useEffect, useState} from 'react';
import styles from './App.module.css';

function App() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            const parsedValue = JSON.parse(valueAsString)
            setValue(parsedValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }, [value])

    const incrementHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className={styles.App}>
            <h1>{value}</h1>
            <div className={styles.btnWrap}>
                <button onClick={incrementHandler}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default App;
