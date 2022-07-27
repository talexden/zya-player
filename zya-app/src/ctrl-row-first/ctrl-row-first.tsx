import './ctrl-row-first.css';

const MIDI_CHANNEL = 3;

function CtrlRowFirst ():JSX.Element {
    return (
        <div className='ctrl row__ctrl'>
            <div className='ctrl__wrapper'>
                <div className='button ctrl__button'>in</div>
                <div className='button ctrl__button'>out</div>
            </div>
            <div className='ctrl__wrapper'>
                <input className='input ctrl__input' type='number'/>
                <input className='input ctrl__input' type='number'/>
            </div>
            <div className='ctrl__wrapper'>
                <div className='button ctrl__button'>Matrix</div>
                <div className='button ctrl__button'>{`Midi ${MIDI_CHANNEL}`}</div>
        </div>


        </div>
    );
}


export default CtrlRowFirst;
