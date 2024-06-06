import './ListToDo.css';
import Elemento from '../Elemento/Elemento';

function ListToDo({ setToDo, ToDos }) {
/**/
    let i = -1;
    return (
        <div className=''>
                {   
                    ToDos.map((t) => {
                        i++;
                        return (
                            <Elemento isEven={(i % 2 === 0)} index={i} id={t.id} contenido={t.contenido} setToDo={setToDo} ToDos={ToDos}></Elemento>
                        )
                    }
                )}
        </div>
    );
    
}

export default ListToDo;