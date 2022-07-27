import './player.css';
import PlayerRowFirst from '../player-row-first/player-row-first';
import PlayerRowSecond from '../player-row-second/player-row-second';
import PlayerHeader from '../player-header/player-header';

type PlayerProps = {
    playerIdx: number,
}

function Player ({playerIdx}: PlayerProps):JSX.Element {
    const fileName = 'test-file';
    return (
        <div className='player'>
            <PlayerHeader playerIdx={playerIdx + 1} fileName={fileName}/>
            <PlayerRowFirst />
            <PlayerRowSecond />
        </div>
    );
}

export default Player;
