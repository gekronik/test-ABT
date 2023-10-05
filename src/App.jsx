
import './App.css'

import SelectWithAutocomplete from "./Components/SelectWithAutocomplete/SelectWithAutocomplete.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Tasks from "./Components/Tasks/Tasks.jsx";
import Header from "./Components/Header.jsx";


function App() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/" element={<SelectWithAutocomplete onSelect={handleSelect}/>}  />
            </Routes>
            {selectedItem && (
                <div className="selected-item">
                    <h2 className="selected-item-title">Selected Item</h2>
                    <p>
                        <strong>Name:</strong> {selectedItem.name}
                    </p>
                    <p>
                        <strong>Age:</strong> {selectedItem.age}
                    </p>
                    <p>
                        <strong>Type:</strong> {selectedItem.type}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
