const cli = require('../helpers/cli')
const fs = require('fs')

const opts = {
  device: '/dev/video2',
  outputDir: '/tmp/pointsight/image',
  outputFile: 'image.jpg'
}

async function captureImage() {
  if (!fs.existsSync(opts.outputDir)) {
    fs.mkdirSync(opts.outputDir, { recursive: true })
  }

  await cli(
    'fswebcam',
    '--no-banner',
    `--device ${opts.device}`,
    `${opts.outputDir}/${opts.outputFile}`
  )
}

module.exports = captureImage
