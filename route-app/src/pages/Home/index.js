import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem vindo a página Home</h1>

        <Link to='/sobre'>Sobre</Link>
        <br />

        <Link to='/contato'>Contatos</Link>
        <br />

      </div>
    );
  }
  
  export default Home;
  