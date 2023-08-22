import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <h1>Sobre o curso</h1>

        <Link to='/'>Home</Link>
        <br />

        <Link to='/contato'>Contatos</Link>
        <br />
      </div>
    );
  }
  
  export default Sobre;
  