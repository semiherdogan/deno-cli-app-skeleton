import { blue, green, red, yellow } from '../deps.ts';

export default class Logger {
  // deno-lint-ignore no-explicit-any
  public static log(...params: any): void {
    console.log(...params);
  }

  // deno-lint-ignore no-explicit-any
  public static table(data: any[], options: any[] = []): void {
    console.table(data, options);
  }

  // deno-lint-ignore no-explicit-any
  public static success(...params: any): void {
    this.log(green('[SUCCESS]'), ...params);
  }

  // deno-lint-ignore no-explicit-any
  public static info(...params: any): void {
    this.log(yellow('[INFO]'), ...params);
  }

  // deno-lint-ignore no-explicit-any
  public static error(...params: any): void {
    this.log(red('[ERROR]'), ...params);
  }

  // deno-lint-ignore no-explicit-any
  public static debug(...params: any): void {
    this.log(blue('[DEBUG]'), ...params);
  }
}
