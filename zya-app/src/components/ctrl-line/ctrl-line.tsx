import './ctrl-line.css';


function CtrlLine ():JSX.Element {
  return (
    <div className='ctrl ctrl__line'>
      <button className='button controller' type='button'>Mute</button>
      <input className='input controller number-no-button' type='number'/>
      <input className='input controller number-no-button' type='number'/>
      <input className='input controller number-no-button' type='number'/>
      <input className='input controller number-no-button' type='number'/>
      <input className='input controller number-no-button' type='number'/>
      <button className='button controller' type='button'>Trig</button>
    </div>
  );
}


export default CtrlLine;
