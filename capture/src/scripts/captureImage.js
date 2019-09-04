const cli = require('../helpers/cli')
const fs = require('fs')
const path = require('path')

const opts = {
  device: '/dev/video2',
  defaultOutput: '/tmp/pointsight/image/capture.jpg'
}

function prepareOutputPath(outputPath) {
  const output = outputPath ? outputPath : opts.defaultOutput

  const dir = path.dirname(output)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  return output
}

async function captureImage(outputPath) {
  const output = prepareOutputPath(outputPath)

  await cli(
    'fswebcam',
    '--no-banner',
    `--device ${opts.device}`,
    output
  )
}

module.exports = {
  opts,
  captureImage
}
