import { useState} from 'react';
import './App.css';

function Calculator() {
    //The useState hook returns an array with two elements: 
    //the current state value, and a function to update the state value
    const [output, setOutput] = useState('');

    const handleClick = (value) => {
      switch (value) {
        case 'C':
          setOutput('0', () => {
            console.log(output);
          });
          break;
        case '=':
          try {
            if(eval(output).toString()==='Infinity')
            {
              alert('Error: Division by zero');
              setOutput('0');
            }
            else
            {
              setOutput(eval(output).toString());
            }
          } catch (error) {
            setOutput('Error');
          }
          break;
        default:
          if(output.length > 18)
          {
            alert('The input is too long');
            setOutput('0');
            break;
          }
          else{
            setOutput(output === '0' ? value : output + value);
          }
      }
    }
    
    return (
        <div id="calculator">
            <div id="output">{output}</div>
            <button onClick={() => handleClick("C")}>C</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={() => handleClick("%")}>%</button>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("(")}>&#40;</button>
            <button onClick={() => handleClick(")")}>&#41;</button>
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick("=")}>=</button>
        </div>
    );
}

export default Calculator;

