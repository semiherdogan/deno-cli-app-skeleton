import { Args } from 'std/flags/mod.ts';

import {
  spinnerStart,
  spinnerSuccess,
  spinnerUpdate,
  // spinnerError,
} from './lib/spinner.ts';

export default async (args: Args) => {
  spinnerStart('Starting....');
  await new Promise((resolve) => setTimeout(resolve, 1500));

  spinnerUpdate('Updating...');
  await new Promise((resolve) => setTimeout(resolve, 1500));

  spinnerSuccess();

  console.log('Hello from app.ts', args);
};
