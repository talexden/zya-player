import {PLAYER_STRIPS_NUMBER} from '../common/const';
import ChannelStripMaster from '../strip-master/strip-master';
import ChannelStripFader from '../strip-fader/strip-fader';

const channels = new Array(PLAYER_STRIPS_NUMBER).fill('');

function StripsRowSecond ():JSX.Element {
    return (
        <div className='row__strips row__strips--second'>
            {channels.map(( _, index)=> (
                <ChannelStripFader key={`fader-${index}`} />
            ))}
            <ChannelStripMaster />
        </div>
    )
}

export default StripsRowSecond;
