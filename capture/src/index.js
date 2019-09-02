#!/usr/bin/env node

const yargs = require('yargs')

const captureImage = require('./scripts/captureImage')
const recordVideo = require('./scripts/recordVideo')

const binary = 'capture'

// Wrap scripts in yargs commands.
const argv = yargs
  .usage(`Usage: ${binary} <command> [options]`)
  .command('image', 'Capture an image', async (yargs) => {
    const argv = yargs
      .usage(`Usage: ${binary} image`)
      .help('help')
      .argv

    await captureImage()
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

// Display help when no command is specified.
if (argv._.length < 1) {
  yargs.showHelp()
}
