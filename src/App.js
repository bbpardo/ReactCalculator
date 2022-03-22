import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);
  const [ secondNumber, setSecondNumber ] = useState(null);
  const [ result, setResult ] = useState(null);
  const resultTemp = useRef(0)

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }
  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }
  function changeResultSumarHandler () {
    let temp = parseFloat(firstNumber) + parseFloat(secondNumber)
    setResult(temp);
  }
  function changeResultRestaHandler () {
    let temp = parseFloat(firstNumber) - parseFloat(secondNumber)
    setResult(temp);
  }
  function changeResultMultiplicarHandler () {
    let temp = parseFloat(firstNumber) * parseFloat(secondNumber)
    setResult(temp);
  }
  function changeResultDividirHandler () {
    let temp = parseFloat(firstNumber) / parseFloat(secondNumber)
    setResult(temp);
  }
  function clearNumberHandler (event) {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }
  function resultMemory(){
    resultTemp.current = parseFloat(result);
  }
  function restoreResult(){
    setFirstNumber(resultTemp.current)

  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber states", secondNumber);
      console.log("resultado", result);
    }
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <button type="sumit" onClick= {changeResultSumarHandler}>+</button>
      <button type="sumit" onClick= {changeResultRestaHandler}>-</button>
      <button type="sumit" onClick= {changeResultMultiplicarHandler}>x</button>
      <button type="sumit" onClick= {changeResultDividirHandler}>%</button>
      <button type="sumit" onClick= {clearNumberHandler}>C</button>
      <button type="sumit" onClick= {resultMemory}>M+</button>
      <button type="sumit" onClick= {restoreResult}>MR</button>
      <input type="text" value={result}/>
      <p>{result}</p>
    </>

  );
}

export default App;
