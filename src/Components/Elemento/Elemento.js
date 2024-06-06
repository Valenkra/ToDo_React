import './Elemento.css';
import { useEffect, useState } from 'react';

function Elemento({ index, id, isEven, contenido, setToDo, ToDos}) {
    const [tachemos, setTachemos] = useState("noTachado");
    const [backgroundC, setbackgroundC] = useState("");
    const [bordes, setBordes] = useState("");

    const esTachado = () => { return ToDos[index].tachado === true }
    const defineBackground = () => { 
        if(ToDos[index].tachado === false){
            if (isEven === true) {setbackgroundC("par"); setTachemos("noTachado"); setBordes("");} 
            else {setbackgroundC("impar"); setTachemos("noTachado"); setBordes("");}
        }else{
            setbackgroundC("tachado");
            setTachemos("tachado");
            setBordes("bordes");
        }
    }

    // #ffcb81
    useEffect(() => {
        defineBackground();
    });

    const tachar = () => {
        const newToDo = ToDos;
        let miElemento = newToDo.filter(t => t.id === id)[0];
        miElemento.tachado = (miElemento.tachado === true) ? false : true;
        if(miElemento.tachado === true) {
            miElemento.fechaYhoraTachado = new Date();
            defineBackground();
        }else{
            defineBackground();
        }
        setToDo(newToDo);
    }

    const borrarElemento = () => {
        let newToDo = ToDos;
        newToDo.splice(index,1);
        setToDo([...newToDo]);
    }

    return (
    <div className={`container ${backgroundC} ${bordes}`}>
        <div className={`elemento`}>
            <div className={`elemento_content ${tachemos}`}>
                <input type="checkbox" checked={esTachado()} onChange={tachar}/>
                <label>{contenido}</label>
            </div>
            <img src={require('../../trash-solid.svg').default} onClick={borrarElemento} alt="Borrar elemento" className='trash'/>
        </div>
        </div>
    );
}
export default Elemento;