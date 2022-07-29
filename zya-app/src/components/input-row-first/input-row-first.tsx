import './input-row-first.css';
import Strip from '../strip/strip';
import {INPUT_STRIPS_NUMBER, StripName} from '../../common/const';

const channels = new Array(INPUT_STRIPS_NUMBER).fill('');


function InputRowFirst (): JSX.Element {
  return (
    <div className='row__strips row__strips--first row__strips--inputs'>
      {channels.map((_, index)=> (
        <Strip key={`strip-${index}`} type={StripName.InputMeter}/>
      ))}
    </div>
  );
}

export default InputRowFirst;
