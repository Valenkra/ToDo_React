import { useState } from 'react';
import Boton from '../Boton/Boton';
import Texto from '../Texto/Texto';
import './TareaMasRapida.css';

function TareaMasRapida(ToDos) {
    const [masRapido, setMasRapido] = useState("Todavía no terminaste ninguna tarea");

    const mostrarMasRapida = (e) => {
        e.preventDefault();
        let newToDo = [...ToDos.ToDos];
        newToDo = newToDo.filter(t => t.tachado === true);
        let times = [];
        newToDo.forEach(element => {
            times.push(element.fechaYhoraTachado - element.fechaYhoraCreacion);
        });
        let target = Math.min(...(times.filter(num => num > 0)));
        let index = [];
        for (let i = 0; i < times.length; i++) {
            if(times[i] === target){
                index.push(i);
            } 
        }
        if (index.length !== 0) {
            let text = `Tarea: ${newToDo[index].contenido} - Terminada en: ${newToDo[index].fechaYhoraTachado - newToDo[index].fechaYhoraCreacion}/s`
            setMasRapido(text)
        }else{
            setMasRapido("Todavía no terminaste ninguna tarea")
        }
    }

    return <form className='TareaMasRapida' onSubmit={mostrarMasRapida}>
        <Boton sendText={"Ver tarea terminada mas rapida"} ></Boton>
        <Texto sendText={`${masRapido}`}></Texto>
    </form>
}

export default TareaMasRapida;