import { wait } from 'wait/mod.ts';
import { symbols } from 'wait/log_symbols.ts';
import { green } from 'std/fmt/colors.ts';

const spinner = wait({
  text: '',
  prefix: '',
  color: green,
  spinner: 'dots',
  hideCursor: true,
  indent: 0,
});

export function spinnerStart(text = ''): void {
  spinner.text = text;
  spinner.start();
}

export function spinnerUpdate(text = ''): void {
  spinner.text = text;
}

export function spinnerStop(text = ''): void {
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
    ? spinner.stopAndPersist({ text, symbol: symbols.error })
    : spinner.stop();
}
