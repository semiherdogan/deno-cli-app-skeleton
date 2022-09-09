// env load
import 'https://deno.land/std@0.154.0/dotenv/load.ts';

// args
export { parse } from 'https://deno.land/std@0.154.0/flags/mod.ts';
export type { Args } from 'https://deno.land/std@0.154.0/flags/mod.ts';

// spinner
export { wait as Spinner } from 'https://deno.land/x/wait@0.1.12/mod.ts';

/**
 * Table
 * @see https://cliffy.io/docs@v0.25.0/table/options
 */
// export { Table } from 'https://deno.land/x/cliffy@v0.25.0/table/mod.ts';

// colors
export {
  bgBlue,
  bgGreen,
  bgRed,
  bgYellow,
  black,
  blue,
  bold,
  cyan,
  green,
  hidden,
  italic,
  magenta,
  red,
  underline,
  white,
  yellow,
} from 'https://deno.land/std@0.154.0/fmt/colors.ts';
