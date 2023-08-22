import { useState, useEffect } from 'react';
import Name from './components/Name';

function App() {

  const [student, setStudent] = useState('Jeyson Com Use State');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [user, setUser] = useState({});
  
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  
  function handleChangeStudent(student) {
    setStudent(student);
  }

  function handleRegister(e) {
    // prevent refresh on page
    e.preventDefault();

    setUser({
      name: name,
      email: email,
      age: age,
    });
  }

  function handleTask(e){
    e.preventDefault();

    setTaskArray([...taskArray, task]);
    setTask('');
  }

  useEffect(() => {
    // it's called when the page starts

    const taskLocalStorage = localStorage.getItem('TaskArrayStorage');

    if (taskLocalStorage){
      setTaskArray(JSON.parse(taskLocalStorage));
    }

  }, []);

  useEffect(() => {
    // it's called when taskArray is changed

    localStorage.setItem('TaskArrayStorage', JSON.stringify(taskArray));

  }, [taskArray]);

  return (
    <div>
      <h1>Componente App</h1>

      <h2>Olá {student}</h2>

      <button onClick={() => handleChangeStudent('Jeyson changed state')}>
        Mudar State
      </button>

      <br />
      <br />

      <Name name="Jeyson Gomes" age={30} />

      <br />
      <br />

      <form onSubmit={handleRegister}>
        <h1>Cadastrando Usuário</h1>

        <label>Nome:</label>
        <br />
        <input
          placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <br />

        <label>Idade:</label>
        <br />
        <input
          type='number'
          placeholder='Digite seu idade'
          value={age}
          onChange={(e) => setAge(e.target.value)} />

        <br />
        <br />

        <button type='submit'>Registrar</button>

      </form>

      <br />
      <br />

      <div>
        <span>Bem vindo: {user.name}</span>
        <br />

        <span>Email: {user.email}</span>
        <br />

        <span>Idade: {user.age}</span>
        <br />
      </div>

      <br />
      <br />

      <form onSubmit={handleTask}>
        <h1>Trabalhando com arrays</h1>

        <label>Tarefa:</label>
        <br />
        <input
          placeholder='Digite sua tarefa'
          value={task}
          onChange={(e) => setTask(e.target.value)} />

        <br />

        <br />
        <br />

        <button type='submit'>Cadastrar Tarefa</button>
      </form>

      <br />
      <br />

      <ul>
        {taskArray.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;