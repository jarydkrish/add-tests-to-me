import { useState } from "react";
import './App.css';
import InputNumeric from './components/InputNumeric';
import InputString from "./components/InputString";

function App() {
  const [numbericValue, setNumericValue] = useState(null);
  const [stringValue, setStringValue] = useState("");
  return (
    <div className="App">
      <InputNumeric value={numbericValue} onChange={setNumericValue} />
      <InputString value={stringValue} onChange={setStringValue} />
      <span>learn react</span>
    </div>
  );
}

export default App;
