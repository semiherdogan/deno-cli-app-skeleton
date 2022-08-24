######
#
# Runner
#
######

ENTRY_FILE=src/mod.ts
BUILD_ARGS="--allow-run --allow-env --allow-read"

FIRST_ARG=${1:-"run"}

if [[ $FIRST_ARG == "help" ]]; then
  echo "COMMANDS:

  lint:         Checks source code format
  format|fmt:   Runs formatter on source code
  run:          Runs script without compiling
  build:        Compiles code into executable
  doc:          Generates docs
  lock:         Creates lock file
  lock-reload:  Reloads dependencies from lock file
  "
  exit 0
fi

if [[ $FIRST_ARG == "run" ]]; then
  shift 1
  deno run $BUILD_ARGS $ENTRY_FILE $@
  exit 0
fi

if [[ $FIRST_ARG == "build" ]]; then
  deno compile $BUILD_ARGS --output "app" $ENTRY_FILE
  ls -lh ./app
  exit 0
fi

if [[ $FIRST_ARG == "lint" ]]; then
  deno fmt --check
  exit 0
fi

if [[ $FIRST_ARG == "format" || $FIRST_ARG == "fmt" ]]; then
  deno fmt
  exit 0
fi

if [[ $FIRST_ARG == "lock" ]]; then
  deno cache --lock=lock.json --lock-write src/deps.ts
  exit 0
fi

if [[ $FIRST_ARG == "lock-reload" ]]; then
  deno cache --reload --lock=lock.json src/deps.ts
  exit 0
fi

echo "Unknown command."
