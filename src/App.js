import './App.css';

import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Helmet } from 'react-helmet';

import Button from './components/Button';
import Screen from './components/Screen';

const App = () => {
  // States for input and output
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  // Color for buttons
  const btnDarker = "#434c5e";
  const btnAccent = "#bf616a";

  // Display input to the screen
  const displayInput = (value) => {
    setInput((input) => [...input, value])
  }

  // Clear input and output
  const clearScreen = () => {
    setInput("")
    setOutput("")
  }

  // Calculate the result
  const calculateResult = () => {
    const result = evaluate(input.join(""))
    setOutput(result)
  }

  return (
    <div className="App">
      {/* Title */}
      <Helmet>
        <title>Calculator</title>
      </Helmet>

      {/* Calculator */}
      <div className="calculator-wrapper">
        {/* Screen Input and Output */}
        <Screen input={input} output={output}/>

        {/* Buttons */}
        <div className="buttons-row">
          <Button text="(" color={btnDarker} handleClick={displayInput} />
          <Button text=")" color={btnDarker} handleClick={displayInput} />
          <Button text="%" color={btnDarker} handleClick={displayInput} />
          <Button text="AC" color={btnDarker} handleClick={clearScreen} />
        </div>
        <div className="buttons-row">
          <Button text="7" handleClick={displayInput} />
          <Button text="8" handleClick={displayInput} />
          <Button text="9" handleClick={displayInput} />
          <Button text="/" color={btnDarker} handleClick={displayInput} />
        </div>
        <div className="buttons-row">
          <Button text="4" handleClick={displayInput} />
          <Button text="5" handleClick={displayInput} />
          <Button text="6" handleClick={displayInput} />
          <Button text="*" color={btnDarker} handleClick={displayInput} />
        </div>
        <div className="buttons-row">
          <Button text="1" handleClick={displayInput} />
          <Button text="2" handleClick={displayInput} />
          <Button text="3" handleClick={displayInput} />
          <Button text="-" color={btnDarker} handleClick={displayInput} />
        </div>
        <div className="buttons-row">
          <Button text="." handleClick={displayInput} />
          <Button text="0" handleClick={displayInput} />
          <Button text="=" color={btnAccent} handleClick={calculateResult} />
          <Button text="+" color={btnDarker} handleClick={displayInput} />
        </div>
      </div>
    </div>
  );
}

export default App;