import './ctrl-row-second.css';

function CtrlRowSecond ():JSX.Element {
    return (
        <div className='ctrl ctrl__row'>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <button className='button controller' type='button'>Play</button>
                <button className='button controller' type='button'>Stop</button>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <button className='button controller' type='button'>Pause</button>
                <button className='button controller' type='button'>Loop</button>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <button className='button controller' type='button'>Start</button>
                <button className='button controller' type='button'>Mute</button>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <button className='button controller' type='button'></button>
                <button className='button controller' type='button'></button>
            </div>
        </div>
    );
}

export default CtrlRowSecond;
