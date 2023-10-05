import React, { useState } from 'react';

function Task2() {
    const [number, setNumber] = useState(3); // Задайте начальное число
    const [exponent, setExponent] = useState(4); // Задайте начальную степень
    const [result, setResult] = useState(null);

    const calculatePower = () => {
        const myPowFunc = (number, n) => {
            if (n === 0) {
                return 1;
            } else if (n > 0) {
                let result = 1;
                for (let i = 0; i < n; i++) {
                    result *= number;
                }
                return result;
            } else {
                return 1 / myPowFunc(number, -n);
            }
        };

        const calculatedResult = myPowFunc(number, exponent);
        setResult(calculatedResult);
    };

    const [inputArray, setInputArray] = useState([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]);
    const [flatResult, setFlatResult] = useState(null);
    const [showTask2, setShowTask2] = useState(true); // Состояние для видимости задачи 2.2
    const [showFlatResult, setShowFlatResult] = useState(false);

    const flattenArray = () => {
        const myFlatFunc = (inputArray) => {
            const result = [];

            function flatten(array) {
                for (const element of array) {
                    if (Array.isArray(element)) {
                        flatten(element);
                    } else {
                        result.push(element);
                    }
                }
            }

            flatten(inputArray);

            return result;
        };

        const flattenedArray = myFlatFunc(inputArray);
        setFlatResult(flattenedArray);
        setShowFlatResult(true);
    };

    const toggleTask2 = () => {
        setShowTask2(!showTask2);
        setShowFlatResult(false); // Скрываем результат при скрытии задачи
    };

    const toggleFlatResult = () => {
        setShowFlatResult(!showFlatResult);
    };

    return (
        <div>
            <h2>Задача 2.1: Возведение в степень</h2>
            <div>
                <label>
                    Введите число:
                    <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
                </label>
            </div>
            <div>
                <label>
                    Введите степень:
                    <input type="number" value={exponent} onChange={(e) => setExponent(Number(e.target.value))} />
                </label>
            </div>
            <button onClick={calculatePower}>Выполнить задачу 2.1</button>
            <div>
                Результат: {result}
            </div>

            <div>
                <h2>Задача 2.2: Преобразование массива</h2>
                <button onClick={toggleTask2}>
                    {showTask2 ? 'Скрыть задачу 2.2' : 'Показать задачу 2.2'}
                </button>
            </div>

            {showTask2 && (
                <div>
                    <button onClick={flattenArray}>Выполнить задачу 2.2</button>
                    <button onClick={toggleFlatResult}>
                        {showFlatResult ? 'Скрыть результат 2.2' : 'Показать результат 2.2'}
                    </button>
                    <div>
                        Входной массив:
                        <pre>{JSON.stringify(inputArray, null, 2)}</pre>
                    </div>
                    {showFlatResult && (
                        <div>
                            Результат: {flatResult && (
                            <pre>{JSON.stringify(flatResult, null, 2)}</pre>
                        )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Task2;