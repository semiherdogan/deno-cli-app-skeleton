import { green, Spinner } from '../deps.ts';

const spinner = Spinner({
  text: '',
  prefix: '',
  color: green,
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

export async function spinnerRun(
  // deno-lint-ignore ban-types
  callback: Function,
  startText = '',
  endText = '',
) {
  spinnerStart(startText);

  await callback();

  spinnerStop(endText);
}
