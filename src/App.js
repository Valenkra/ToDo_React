import './App.css';
import { useState } from 'react';
import Titulo from './Components/Titulo/Titulo';
import NuevoToDo from './Components/NuevoToDo/NuevoToDo';
import TareaMasRapida from './Components/TareaMasRapida/TareaMasRapida';
import ListToDo from './Components/ListToDo/ListToDo'

function App() {
  const [ToDos, setToDos] = useState([]);
  const [index, setIndex] = useState(1);

  return (
    <div className="App">
      <Titulo sendText={"To Do"}></Titulo>
      <ListToDo ToDos={ToDos} setToDo={setToDos}></ListToDo>
      <NuevoToDo ToDos={ToDos} setToDos={setToDos} futureId={index} setIndex={setIndex}></NuevoToDo>
      <div className='separador'></div>
      <TareaMasRapida ToDos={ToDos}></TareaMasRapida>
    </div>
  );
}

export default App;