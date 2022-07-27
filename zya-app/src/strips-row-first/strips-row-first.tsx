import './strips-row-first.css';
import {PLAYER_STRIPS_NUMBER} from '../common/const';
import ChannelStripMeter from '../strip-meter/strip-meter';
import ChannelStripCrossfader from '../strip-crossfader/strip-crossfader';

const channels = new Array(PLAYER_STRIPS_NUMBER).fill('');

function StripsRowFirst ():JSX.Element {
    return (
        <div className='row__strips row__strips--first'>
            {channels.map((_, index)=> (
                <ChannelStripMeter key={`strip-${index}`} />
            ))}
            <ChannelStripCrossfader />
        </div>
    )
}

export default StripsRowFirst;
