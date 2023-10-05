import React, { useState } from 'react';
import data from "/data.json";


function Task1() {

    const [task11Result, setTask11Result] = useState(null);
    const [task12Result, setTask12Result] = useState(null);
    const [task13Result, setTask13Result] = useState(null);
    const [task14Result, setTask14Result] = useState(null);
    const [showTask11Result, setShowTask11Result] = useState(false);
    const [showTask12Result, setShowTask12Result] = useState(false);
    const [showTask13Result, setShowTask13Result] = useState(false);
    const [showTask14Result, setShowTask14Result] = useState(false);

    const calculateTask11 = () => {
        const result = {
            dogs: 0,
            cats: 0,
            avgage: 0,
        };

        if (data.length === 0) {
            setTask11Result(result);
            return;
        }

        let totalAge = 0;

        data.forEach((animal) => {
            if (animal.type === 'dog') {
                result.dogs++;
            } else if (animal.type === 'cat') {
                result.cats++;
            }

            totalAge += animal.age;
        });

        result.avgage = Math.round(totalAge / data.length);

        setTask11Result(result);
        setShowTask11Result(true);
    };

    const calculateTask12 = () => {
        const blackPurebredDogs = data.filter(
            (animal) => animal.type === 'dog' && animal.features.includes('black') && animal.breed
        );

        setTask12Result(blackPurebredDogs.length);
        setShowTask12Result(true);
    };

    const calculateTask13 = () => {
        const result = data.filter((animal) => {
            if (animal.type === 'cat' && animal.features.includes('black')) {
                return true;
            }

            if (animal.type === 'dog' && animal.features.includes('white')) {
                return true;
            }

            return false;
        });

        setTask13Result(result);
        setShowTask13Result(true);
    };

    const calculateTask14 = () => {
        const sortedAnimals = data.sort((a, b) => {
            if (a.type === 'cat' && b.type === 'cat') {
                return b.age - a.age;
            }
            if (a.type === 'dog' && b.type === 'dog') {
                return a.age - b.age;
            }
            if (a.type === 'cat') {
                return -1;
            } else {
                return 1;
            }
        });

        setTask14Result(sortedAnimals);
        setShowTask14Result(true);
    };

    const toggleTask11Result = () => {
        setShowTask11Result(!showTask11Result);
    };

    const toggleTask12Result = () => {
        setShowTask12Result(!showTask12Result);
    };

    const toggleTask13Result = () => {
        setShowTask13Result(!showTask13Result);
    };

    const toggleTask14Result = () => {
        setShowTask14Result(!showTask14Result);
    };

    return (
        <div>
            <h2>Задача 1</h2>
            <button onClick={calculateTask11}>Выполнить задачу 1.1</button>
            {showTask11Result && (
                <button onClick={toggleTask11Result}>
                    {showTask11Result ? 'Скрыть результат 1.1' : 'Показать результат 1.1'}
                </button>
            )}
            {showTask11Result && (
                <div>
                    Задача 1.1 Результат:
                    {task11Result && (
                        <pre>{JSON.stringify(task11Result, null, 2)}</pre>
                    )}
                </div>
            )}

            <button onClick={calculateTask12}>Выполнить задачу 1.2</button>
            {showTask12Result && (
                <button onClick={toggleTask12Result}>
                    {showTask12Result ? 'Скрыть результат 1.2' : 'Показать результат 1.2'}
                </button>
            )}
            {showTask12Result && (
                <div>
                    Задача 1.2 Результат: {task12Result}
                </div>
            )}

            <button onClick={calculateTask13}>Выполнить задачу 1.3</button>
            {showTask13Result && (
                <button onClick={toggleTask13Result}>
                    {showTask13Result ? 'Скрыть результат 1.3' : 'Показать результат 1.3'}
                </button>
            )}
            {showTask13Result && (
                <div>
                    Задача 1.3 Результат:
                    {task13Result && (
                        <pre>{JSON.stringify(task13Result, null, 2)}</pre>
                    )}
                </div>
            )}

            <button onClick={calculateTask14}>Выполнить задачу 1.4</button>
            {showTask14Result && (
                <button onClick={toggleTask14Result}>
                    {showTask14Result ? 'Скрыть результат 1.4' : 'Показать результат 1.4'}
                </button>
            )}
            {showTask14Result && (
                <div>
                    Задача 1.4 Результат:
                    {task14Result && (
                        <pre>{JSON.stringify(task14Result, null, 2)}</pre>
                    )}
                </div>
            )}
        </div>
    );
}

export default Task1;