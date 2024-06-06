import './Input.css';

function Input({ sendText, name="" }) {
  return <input className='myInpt' placeholder={sendText} name={name}/>;
}

export default Input;