#!/usr/bin/env node

const yargs = require('yargs')

const { captureImage } = require('./scripts/captureImage')
const recordVideo = require('./scripts/recordVideo')

const binary = 'capture'

// Wrap scripts in yargs commands.
const argv = yargs
  .usage(`Usage: ${binary} <command> [options]`)
  .command('image', 'Capture an image', async (yargs) => {
    const argv = yargs
      .usage(`Usage: ${binary} image [options]`)
      .describe('output', 'Specify output path (optional) default: /tmp/pointsight/image/capture.jpg')
      .help('help')
      .argv

    await captureImage(argv.output)
  })
  .command('video', 'Record a video', async (yargs) => {
    const argv = yargs
      .usage(`Usage: ${binary} video <seconds>`)
      .help('help')
      .argv

    await recordVideo(argv.seconds)
  })
  .help('help')
  .argv

// Throw when an unknown command is specified.
const commandHandlers = yargs.getCommandInstance().getCommands()
if (commandHandlers.length > 0 && !(argv._[0] in commandHandlers)) {
  throw new Error(`Unknown command '${argv._[0]}'`)
}

// Display help when no command is specified.
if (argv._.length < 1) {
  yargs.showHelp()
}
