import 'https://deno.land/std@0.152.0/dotenv/load.ts'; // env load

export { parse } from 'https://deno.land/std@0.152.0/flags/mod.ts';
export type { Args } from 'https://deno.land/std@0.152.0/flags/mod.ts';
export { writeAllSync } from 'https://deno.land/std@0.152.0/streams/conversion.ts';

export type { Options as SpinnerOptions } from 'https://deno.land/x/spinners@v1.1.2/mod.ts';
export {
  SpinnerTypes,
  TerminalSpinner,
} from 'https://deno.land/x/spinners@v1.1.2/mod.ts';

// deno-fmt-ignore
export {
  hidden,

  bold,
  italic,
  underline,

  bgBlue,
  bgGreen,
  bgYellow,
  bgRed,

  blue,
  green,
  red,
  yellow,
  white,
  black,
  cyan,
  magenta,
} from "https://deno.land/std@0.152.0/fmt/colors.ts";
