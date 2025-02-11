import logo from './logo.svg';
import './App.css';

function App() {
  let nome = "João Paixão"
  let sistema = "ABC Finance"

  function soma(a, b) {
    let s = a + b;
    return s;
  }

  return (
    <div className="App">
      <h2>Alterando o código JSX</h2>
      <p>Olá, usuário {nome}!</p>
      <p>Seja bem-vindo ao sistema {sistema}!</p>
      <p>Chamando a função de soma: {soma(1, 4)}.</p>

      <p>-----------------------------------------------------------------</p>
    
    </div>
  );
}

export default App;
