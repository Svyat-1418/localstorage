import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
    const [value, setValue] = useState(0)

    const incrementHandler = () => {
        setValue(value + 1)
    }
    const setToLocalstorageHandler = () => {
        localStorage.setItem("counterValue+2", JSON.stringify(value + 2))
        localStorage.setItem("counterValue", JSON.stringify(value))
    }
    const getFromLocalstorageHandler = () => {
        const valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let parsedValue = JSON.parse(valueAsString)
            console.log(parsedValue)
            setValue(parsedValue)
        }
    }
    const clearLocalstorage = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalstorage = () => {
        localStorage.removeItem("counterValue+2")
    }

    return (
        <div className={styles.App}>
            <h1>{value}</h1>
            <div className={styles.btnWrap}>
                <button onClick={incrementHandler}>
                    Increment
                </button>
                <button onClick={setToLocalstorageHandler}>
                    Set To Localstorage
                </button>
                <button onClick={getFromLocalstorageHandler}>
                    Get From Localstorage
                </button>
                <button onClick={clearLocalstorage}>
                    Clear Localstorage
                </button>
                <button onClick={removeItemFromLocalstorage}>
                    Remove Item From Localstorage
                </button>
            </div>
        </div>
    );
}

export default App;
