#!/usr/bin/env node

const yargs = require('yargs')

const captureImage = require('./scripts/captureImage')
const recordVideo = require('./scripts/recordVideo')

// Wrap scripts in yargs commands.
const argv = yargs
  .usage('Usage: $0 <command> [options]')
  .command('image', 'Capture an image', async (yargs) => {
    const argv = yargs
      .usage('Usage: $0 image [options]')
      .help('help')
      .argv

    await captureImage()
  })
  .command('video', 'Record a video', async (yargs) => {
    const argv = yargs
      .usage('Usage: $0 video [options]')
      .help('help')
      .argv

    await recordVideo()
  })
  .help('help')
  .argv

// Display help when no command is specified.
if (argv._.length < 1) {
  yargs.showHelp()
}
