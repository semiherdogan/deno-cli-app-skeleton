import { Args } from './deps.ts';
import { spinnerStart, spinnerStop, spinnerUpdate } from './lib/spinner.ts';
import Logger from './lib/logger.ts';
import OutputWriter from './lib/output_writer.ts';

export default async (args: Args) => {
  spinnerStart('Starting....')
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinnerUpdate('Updating...');
  await new Promise(resolve => setTimeout(resolve, 1500));
  spinnerStop();

  new OutputWriter()
    .green('Hello ')
    .write('from ')
    .red('app.ts ')
    .write('file.')
    .newLine();

  Logger.info('ARGS:', args);
};
