import { Args } from 'std/flags/mod.ts';

import { spinnerStart, spinnerSuccess, spinnerUpdate } from './lib/spinner.ts';

export default async (args: Args) => {
  spinnerStart('Starting....');
  await new Promise((resolve) => setTimeout(resolve, 1500));

  spinnerUpdate('Updating...');
  await new Promise((resolve) => setTimeout(resolve, 1500));

  spinnerSuccess('Success');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Cli arguments: ', args);
};
