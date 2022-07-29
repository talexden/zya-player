import './input-row-second.css';
import Strip from '../strip/strip';
import {INPUT_STRIPS_NUMBER, StripName} from '../../common/const';

const channels = new Array(INPUT_STRIPS_NUMBER).fill('');


function InputRowSecond (): JSX.Element {
  return (
    <div className='row__strips row__strips--second row__strips--inputs'>
      {channels.map((_, index)=> (
        <Strip key={`strip-${index}`} type={StripName.Input}/>
      ))}
    </div>
  );
}

export default InputRowSecond;
