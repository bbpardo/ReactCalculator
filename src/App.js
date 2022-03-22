import { useEffect, useRef, useState } from 'react';
import './App.css';
import History from './components/history/History.jsx'

function App() {
  const [ firstNumber, setFirstNumber ] = useState(0);
  const [ secondNumber, setSecondNumber ] = useState(0);
  const [ result, setResult ] = useState(0);
  const [ resultsHistory, setResultsHistory ] = useState([]);
  const resultTemp = useRef(0)
  function changeFirstNumberHandler (event) {
    setFirstNumber(parseFloat(event.target.value));
  }
  function changeSecondNumberHandler (event) {
    setSecondNumber(parseFloat(event.target.value));
  }
  function changeResultSumarHandler () {
    const temp ={
      primerOperador: firstNumber,
      segundoOperador: secondNumber,
      operador:"+",
      resultado: firstNumber + secondNumber
    }
    setResult(temp);
    setFirstNumber(temp.resultado);
  }
  function changeResultRestaHandler () {
    const temp ={
      primerOperador: firstNumber,
      segundoOperador: secondNumber,
      operador:"-",
      resultado: firstNumber - secondNumber
    }
    setResult(temp);
    setFirstNumber(temp.resultado);
  }
  function changeResultMultiplicarHandler () {
    const temp ={
      primerOperador: firstNumber,
      segundoOperador: secondNumber,
      operador:"x",
      resultado: firstNumber * secondNumber
    }
    setResult(temp);
    setFirstNumber(temp.resultado);
  }
  function changeResultDividirHandler () {
    const temp ={
      primerOperador: firstNumber,
      segundoOperador: secondNumber,
      operador:"/",
      resultado: firstNumber / secondNumber
    }
    setResult(temp);
    setFirstNumber(temp.resultado);
  }
  function clearNumberHandler (event) {
    setFirstNumber("0");
    setSecondNumber("0");
    setResult("0");
  }
  function resultMemory(){
    resultTemp.current = parseFloat(result);
  }
  function restoreResult(){
    setFirstNumber(resultTemp.current)

  }
  useEffect(
    ()=>{
      setResultsHistory([...resultsHistory,result]);
    },[result]
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
      <p>{result.resultado}</p>
      <h2>Historial</h2>
      <History results={resultsHistory}/>
    </>
  );
}

export default App;
