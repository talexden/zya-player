import './mixer.css';
import Header from '../header/header';
import StripsRowFirst from '../strips-row-first/strips-row-first';
import StripsRowSecond from '../strips-row-second/strips-row-second';
import InputRowFirst from '../input-row-first/input-row-first';
import InputRowSecond from '../input-row-second/input-row-second';
import CtrlLine from '../ctrl-line/ctrl-line';

const TYPE_NAME = 'Mixer';


function Mixer ():JSX.Element {
    return (
      <div className='mixer component'>
        <Header blockName={TYPE_NAME}/>
        <CtrlLine />
        <div className='mixer__row mixer__row--first row'>
          <StripsRowFirst />
          <InputRowFirst />
        </div>
        <div className='mixer__row row row--second'>
          <StripsRowSecond />
          <InputRowSecond />
        </div>
      </div>
    )
}

export default Mixer;
