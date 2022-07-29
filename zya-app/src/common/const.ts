import {StripControlType} from '../types/strip-control-type';

export const PLAYER_COUNT = 5;

export const PLAYER_STRIPS_NUMBER = 8;
export const INPUT_STRIPS_NUMBER = 4;

export const TABINDEX = 0;

export enum StripName {
  CrossFader = 'CrossFader',
  Fader = 'Fader',
  Input = 'Input',
  InputMeter = 'InputMeter',
  Master = 'Master',
  Meter = 'Meter'
}


export const StripControl: StripControlType  = Object.freeze({
  [StripName.CrossFader]: {
    name: 'cross-fader',
    isController: true,
  },
  [StripName.Fader]: {
    name: 'fader',
    isController: true,
  },
  [StripName.Input]: {
    name: 'input',
    isController: true,
  },
  [StripName.InputMeter]: {
    name: 'input-meter',
    isController: true,
  },
  [StripName.Master]: {
    name: 'master',
    isController: true,
  },
  [StripName.Meter]: {
    name: 'meter',
    isController: false,
  },
});

