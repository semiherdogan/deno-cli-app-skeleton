# :app name:

## Development steps

- Update `APP_NAME` variable in `.github/workflows/build-and-release.yml`.
- Update `AppName` variable in `src/constants.ts`.
- Update help string in `src/mod.ts`.
- Use `deno task run` to run project.
- Use `deno task build` to build project.
- Use `deno task` to see all task list.

## Installation

**NOTE**: Before install this package, you should have this and that.

- Download standalone binary from
  [releases](https://github.com/username/repository/releases).
- Move downloaded file to path
- Or you can download source code and compile on your own.

## Usage

`app-name [arg1] [arg2]`

- `--help` to print help.
- `--version` to print app version.

## Libs to use (for development)

- You may use [cliffy](https://cliffy.io/docs/) for cli table, prompt etc.
  (already included in import maps)
- For date format you may try [this](std/datetime/mod.ts).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
