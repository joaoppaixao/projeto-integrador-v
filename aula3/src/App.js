import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [vezesClicadas, SetVezesClicadas] = useState(0)

  const [soma, SetSoma] = useState(0)


  let nome = "João Paixão"
  let sistema = "ABC Finance"

  function soma1(a, b) {
    let s = a + b;
    return s;
  }

  const clickBotao1 = () => {
    console.log("Botão 1 foi clicado!")
    SetVezesClicadas(vezesClicadas +1)
  }

  function clickBotao2() {
    SetVezesClicadas(vezesClicadas -1)
  }

  function clickBotao3() {
    let a = 12;
    let b = 14;
    SetSoma (a + b);
  }

  return (
    <div className="App">
      <h2>Alterando o código JSX</h2>
      <p>Olá, usuário {nome}!</p>
      <p>Seja bem-vindo ao sistema {sistema}!</p>
      <p>Chamando a função de soma: {soma1(1, 4)}.</p>
      <p>------------------------------------------------</p>

      <p>A partir daqui, os botões são <mark>CONTADORES</mark>!</p>
      <p>Vamos testá-los?</p>
      <button class="btn" onClick={clickBotao1}> Clique aqui para aumentar</button>

      <button class="btn" onClick={clickBotao2}>Clique aqui para diminuir</button>
      <p>O botão foi clicado <mark>{vezesClicadas}</mark> vezes!</p>

      <p>------------------------------------------------</p>

      <p>A partir daqui, os botões são <mark>SOMADORES</mark>!</p>
      <p>Vamos testá-lo?</p>
      <button class="btn" onClick={clickBotao3}> Clique aqui para somar</button>
      <p>A soma é: <mark>{soma}</mark></p>
    
    </div>
  );
}

export default App;
