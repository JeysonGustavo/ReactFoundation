// function Name(props) {
//     return (
//         <span>Bem-vindo: {props.name}</span>
//     );
// }

function Name({name, age}){
    return (
      <span>Bem-vindo: {name} - Idade: {age} anos</span>
    );
  }

export default Name;