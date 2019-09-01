#!/usr/bin/env node

const yargs = require('yargs')
const captureImage = require('./scripts/captureImage')

const argv = yargs
  .usage('Usage: $0 <command> [options]')
  .command('image', 'Capture an image', function(yargs) {
    const argv = yargs
      .usage('Usage: $0 image [options]')
      .help('help')
      .argv

    captureImage()
  })
  .help('help')
  .argv

// Display help when no command is specified.
if (argv._.length < 1) {
  yargs.showHelp()
}
