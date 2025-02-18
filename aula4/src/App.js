import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [numero1, SetNumero1] = useState(0);
  const [numero2, SetNumero2] = useState(0);
  const [soma, SetSoma] = useState(0);

  function somar() {
    SetSoma(parseFloat(numero1) + parseFloat(numero2));
  }

  return (
    <div className="App">
      <h2>Digite o primeiro número: </h2>
      <input type="text" onChange={(e) => SetNumero1(e.target.value)} required></input>
      <h3>Número digitado: {numero1}</h3>

      <h2>Digite o segundo número: </h2>
      <input type="text" onChange={(e) => SetNumero2(e.target.value)} required></input>
      <h3>Número digitado: {numero2}</h3>

      <button onClick={somar}>Somar</button>
      <p>A soma dos dois números é: {soma}</p>

    </div>
  );
}

export default App;
