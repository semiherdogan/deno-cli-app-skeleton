import { blue, green, magenta, red, writeAllSync, yellow } from '../deps.ts';

export default class OutputWriter {
  text = '';

  public write(text: string): this {
    writeAllSync(Deno.stdout, new TextEncoder().encode(text));

    return this;
  }

  public newLine() {
    return this.write('\n');
  }

  public blue(text: string) {
    return this.write(blue(text));
  }

  public yellow(text: string) {
    return this.write(yellow(text));
  }

  public green(text: string): this {
    return this.write(green(text));
  }

  public red(text: string): this {
    return this.write(red(text));
  }

  public magenta(text: string): this {
    return this.write(magenta(text));
  }
}
