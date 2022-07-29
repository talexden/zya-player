import './ctrl-row-first.css';


function CtrlRowFirst ():JSX.Element {
    return (
        <div className='ctrl ctrl__row'>
            <div className='ctrl__wrapper'>
                <button className='button controller' type='button'>in</button>
                <button className='button controller' type='button'>out</button>
            </div>
            <div className='ctrl__wrapper'>
                <input className='input controller number-no-button' type='number'/>
                <input className='input controller number-no-button' type='number'/>
            </div>
            <div className='ctrl__wrapper'>
                <button className='button controller' type='button'>Matrix</button>
                <input className='input controller number-no-button' type='number' />
        </div>


        </div>
    );
}


export default CtrlRowFirst;
