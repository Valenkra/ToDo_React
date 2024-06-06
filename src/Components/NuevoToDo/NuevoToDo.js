import Boton from '../Boton/Boton';
import Input from '../Input/Input';
import './NuevoToDo.css';

function NuevoToDo({ToDos, setToDos, futureId, setIndex}) {

  const agregarToDo = (e) => {
    e.preventDefault();
      setToDos([...ToDos, {
        id: futureId,
        contenido: e.target.contenido.value,
        tachado: false,
        fechaYhoraCreacion: new Date(),
        fechaYhoraTachado: false
      }]);
    setIndex(futureId + 1);
  }

  return (<>
  <form className='NuevoToDo' onSubmit={agregarToDo} autoComplete="off">
      <Input sendText={"Escribe algo que tengas que hacer..."} name="contenido"/>
      <Boton sendText={"Agregar tarea"}/>
  </form>
  </>)
}

export default NuevoToDo;