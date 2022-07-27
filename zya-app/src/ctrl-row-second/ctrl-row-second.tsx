import './ctrl-row-second.css';

function CtrlRowSecond ():JSX.Element {
    return (
        <div className='ctrl row__ctrl'>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <div className='button ctrl__button'>Play</div>
                <div className='button ctrl__button'>Stop</div>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <div className='button ctrl__button'>Pause</div>
                <div className='button ctrl__button'>Loop</div>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <div className='button ctrl__button'>Start</div>
                <div className='button ctrl__button'>Mute</div>
            </div>
            <div className='ctrl__wrapper ctrl__wrapper--second'>
                <div className='button ctrl__button'></div>
                <div className='button ctrl__button'></div>
            </div>
        </div>
    );
}

export default CtrlRowSecond;
