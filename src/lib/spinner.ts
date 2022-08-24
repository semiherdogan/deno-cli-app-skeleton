import Logger from './logger.ts';

import { SpinnerOptions, SpinnerTypes, TerminalSpinner } from '../deps.ts';

let terminalSpinner: TerminalSpinner;

const terminalSpinnerOptions: Partial<SpinnerOptions> = {
  text: '',
  color: 'green',
  spinner: SpinnerTypes.windows,
  indent: 0,
  cursor: false,
  writer: Deno.stdout,
};

export function spinnerStart(text = '') {
  terminalSpinnerOptions.text = text;
  terminalSpinner = new TerminalSpinner(terminalSpinnerOptions);

  terminalSpinner.start();
}

export function spinnerUpdate(text = '', color = terminalSpinnerOptions.color) {
  terminalSpinnerOptions.text = text;
  terminalSpinnerOptions.color = color;

  terminalSpinner.set(terminalSpinnerOptions);
}

export function spinnerStop(text = '') {
  terminalSpinner.stop();

  if (text.length > 0) {
    Logger.log(text);
  }
}

// deno-lint-ignore ban-types
export async function spinnerRun(
  callback: Function,
  startText = '',
  endText = '',
) {
  spinnerStart(startText);

  await callback();

  spinnerStop(endText);
}
