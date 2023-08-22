import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
        <h1>Contatos</h1>

        <br />

        <span>Email: jeysongustavo@gmail.com</span>

        <br />
        <br />

        <Link to='/'>Home</Link>
        <br />

        <Link to='/sobre'>Sobre</Link>
        <br />
      </div>
    );
  }
  
  export default Contato;
  