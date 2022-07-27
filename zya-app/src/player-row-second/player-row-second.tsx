import './player-row-second.css';
import StripsRowSecond from '../strips-row-second/strips-row-second';
import CtrlRowSecond from '../ctrl-row-second/ctrl-row-second';

function PlayerRowSecond ():JSX.Element {
    return (
        <div className='player__row row row--second'>
            <StripsRowSecond />
            <CtrlRowSecond />
        </div>
    );
}

export default PlayerRowSecond;
