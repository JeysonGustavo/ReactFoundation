import { Link } from 'react-router-dom';

function Erro() {
    return (
      <div>
        <h1>Página não encontrada</h1><br />

        <span></span>

        <Link to='/'>Home</Link>
        <br />

        <Link to='/contato'>Contatos</Link>
        <br />
      </div>
    );
  }
  
  export default Erro;
  