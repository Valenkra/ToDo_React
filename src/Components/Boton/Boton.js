import './Boton.css';

function Boton({ sendText }) {
  return <button className='btn'>{ sendText }</button>;
}

export default Boton;