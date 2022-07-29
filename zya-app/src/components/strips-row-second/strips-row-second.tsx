import './strips-row-second.css';
import {PLAYER_STRIPS_NUMBER, StripName} from '../../common/const';
import Strip from '../strip/strip';

const channels = new Array(PLAYER_STRIPS_NUMBER).fill('');

function StripsRowSecond ():JSX.Element {
    return (
        <div className='row__strips row__strips--second'>
            {channels.map(( _, index)=> (
                <Strip key={`fader-${index}`} type={StripName.Fader}/>
            ))}
            <Strip type={StripName.Master}/>
        </div>
    )
}

export default StripsRowSecond;
