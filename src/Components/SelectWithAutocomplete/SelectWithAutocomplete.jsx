import React, {useState, useEffect, useMemo,} from 'react';
import './SelectWithAutocomplete.css';
import data from "/data.json";

const SelectWithAutocomplete = ({onSelect}) => {

    const [inputValue, setInputValue] = useState("");
    // const [filteredOptions, setFilteredOptions] = useState([]);

    const filteredOptions = useMemo(() => {
        return  data.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelect = (item) => {
        setInputValue(item.name);
        onSelect(item);
    };

    return (
        <div className="select-container">
            <h1 className="app-title">Введите имя</h1>
            <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
                className="select-input"
            />
            <ul className="options">
                {filteredOptions.map((item) => (
                    <li key={item.name} onClick={() => handleSelect(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default SelectWithAutocomplete;