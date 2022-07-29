import './strip.css';
import {StripControl, StripName, TABINDEX} from '../../common/const';

type StripControlProps = {
  type: StripName,
}

function Strip ({type}: StripControlProps):JSX.Element {
  const currentStrip = StripControl[type];
  if (currentStrip.isController) {
    return (
      <div className={`strip strip--${currentStrip.name} controller`} tabIndex={TABINDEX}></div>
    )
  }
  return (
    <div className={`strip strip--${currentStrip.name}`}></div>
  );
}

export default Strip;
