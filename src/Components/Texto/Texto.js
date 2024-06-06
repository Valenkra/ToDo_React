import './Texto.css';

function Texto({ sendText = "" }) {
  return <div className='rta'>{sendText}</div>
}

export default Texto;