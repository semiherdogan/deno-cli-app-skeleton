import { bold, parse } from './deps.ts';
import OutputWriter from './lib/output_writer.ts';
import main from './app.ts';

const version = Deno.env.get('APP_VERSION') || '0.0.0';
const platform = Deno.env.get('APP_PLATFORM') || 'unknown-os';
const appName = Deno.env.get('APP_NAME') || 'my-app';

const help = `${appName} ${version}-${platform}

Usage:
    ${appName} [arg1] [arg2]
    ${appName} (-h | --help)
    ${appName} (-v | --version)

Options:
    -h, --help       Print help
    -v, --version    Print version
    [arg1]
    [arg2]
`;

const args = parse(Deno.args);

if (args._.includes('version') || args?.v || args?.version) {
  new OutputWriter()
    .green(bold(appName))
    .yellow(version + '-' + platform)
    .newLine();

  Deno.exit(0);
}

if (args._.includes('help') || args?.h || args?.help) {
  new OutputWriter()
    .write(help)
    .newLine();

  Deno.exit(0);
}

await main(args);
