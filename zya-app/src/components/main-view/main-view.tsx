import './main-view.css';
import Player from '../player/player';
import {PLAYER_COUNT} from '../../common/const';
import Mixer from '../mixer/mixer';

const players = new Array(PLAYER_COUNT).fill('');

function MainView ():JSX.Element {
  return (
    <div className='main-view container'>
      {
          players.map(( _, index) => (
              <Player key={`player-${index}`} playerIdx={index} />
          ))
      }
      <Mixer />
    </div>
  );
}

export default MainView;
