const cli = require('../helpers/cli')

const opts = {
  device: '/dev/video2',
  output: './media/snapshot.jpg'
}

async function captureImage() {
  console.log(`Capturing image...`)

  await cli(
    'fswebcam',
    `--device ${opts.device}`,
    `${opts.output}`
  )
}

module.exports = captureImage
