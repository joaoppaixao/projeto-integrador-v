import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [mensagem, SetMensagem] = useState("");

  function jogadorEscolheuPedra() {
    SetMensagem("Pedra")

    var res = document.getElementById('res');
    res.innerHTML = `<p>Jogador escolheu Pedra!`
  }

  function jogadorEscolheuPapel() {
    SetMensagem("Papel")

    var res = document.getElementById('res');
    res.innerHTML = `<p>Jogador escolheu Papel!`
  }

  function jogadorEscolheuTesoura() {
    SetMensagem("Tesoura")

    var res = document.getElementById('res');
    res.innerHTML = `<p>Jogador escolheu Tesoura!`
  }

  function sorteio() {
    let n = Math.random
  }

  return (
    <div className="App">
      <h1>Bem-vindo ao jogo do Pedra, Papel e Tesoura!</h1>
      <p>Clique em qual será a sua jogada:</p>
      <button class="btn" onClick={jogadorEscolheuPedra}>Pedra</button>
      <button class="btn" onClick={jogadorEscolheuPapel}>Papel</button>
      <button class="btn" onClick={jogadorEscolheuTesoura}>Tesoura</button>

      <div id="res">
        
      </div>

      <div>
        <button class="btn" onClick={sorteio}>Jogar</button>
      </div>
    </div>
  );
}

export default App;
