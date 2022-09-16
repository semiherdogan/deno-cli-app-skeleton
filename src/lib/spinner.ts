import { Colors, Spinner, SpinnerSymbols } from '../deps.ts';

const spinner = Spinner({
  text: '',
  prefix: '',
  color: Colors.green,
  spinner: 'dots',
  hideCursor: true,
  indent: 0,
});

export function spinnerStart(text = '') {
  spinner.text = text;
  spinner.start();
}

export function spinnerUpdate(text = '') {
  spinner.text = text;
}

export function spinnerStop(text = '') {
  spinner.stop();

  if (text.length > 0) {
    console.log(text);
  }
}

export function spinnerSuccess(text = ''): void {
  text.length > 0 ? spinner.succeed(text) : spinner.stop();
}

export function spinnerError(text = ''): void {
  text.length > 0
    ? spinner.stopAndPersist({ text, symbol: SpinnerSymbols.error })
    : spinner.stop();
}
