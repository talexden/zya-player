import './strips-row-first.css';
import {PLAYER_STRIPS_NUMBER, StripName} from '../../common/const';
import Strip from '../strip/strip';

const channels = new Array(PLAYER_STRIPS_NUMBER).fill('');

function StripsRowFirst ():JSX.Element {
    return (
        <div className='row__strips row__strips--first'>
            {channels.map((_, index)=> (
                <Strip key={`strip-${index}`} type={StripName.Meter}/>
            ))}
            <Strip type={StripName.CrossFader}/>
        </div>
    )
}

export default StripsRowFirst;
