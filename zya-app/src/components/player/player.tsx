import './player.css';
import Header from '../header/header';
import StripsRowFirst from '../strips-row-first/strips-row-first';
import CtrlRowFirst from '../ctrl-row-first/ctrl-row-first';
import StripsRowSecond from '../strips-row-second/strips-row-second';
import CtrlRowSecond from '../ctrl-row-second/ctrl-row-second';

type PlayerProps = {
    playerIdx: number,
}

function Player ({playerIdx}: PlayerProps):JSX.Element {
    const fileName = 'test-file';
    return (
        <div className='player component'>
          <Header blockName={`Player-${playerIdx + 1}`}/>
          <p className='header__file-name'>{fileName}</p>
          <div className='player__row row'>
            <StripsRowFirst />
            <CtrlRowFirst />
          </div>
          <div className='player__row row row--second'>
            <StripsRowSecond />
            <CtrlRowSecond />
          </div>
        </div>
    );
}

export default Player;
