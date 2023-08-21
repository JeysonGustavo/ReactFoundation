import Name from './components/Name';

function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Name name="Jeyson Gomes" age={30} />
      <br />
      <Name name="João Silva" age={28} />
    </div>
  );
}

export default App;