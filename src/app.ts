import { Args } from './deps.ts';
import { spinnerStart, spinnerStop, spinnerUpdate } from './lib/spinner.ts';

export default async (args: Args) => {
  spinnerStart('Starting....');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  spinnerUpdate('Updating...');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  spinnerStop();

  console.log('Hello from app.ts', args);
};
