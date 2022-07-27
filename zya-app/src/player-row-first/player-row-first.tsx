import './player-row-first.css';
import StripsRowFirst from '../strips-row-first/strips-row-first';
import CtrlRowFirst from '../ctrl-row-first/ctrl-row-first';

function PlayerRowFirst ():JSX.Element {
    return (
        <div className='player__row row'>
            <StripsRowFirst />
            <CtrlRowFirst />
        </div>
    );
}

export default PlayerRowFirst;
