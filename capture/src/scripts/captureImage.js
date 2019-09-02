const cli = require('../helpers/cli')
const fs = require('fs')

const opts = {
  device: '/dev/video2'
}

async function captureImage() {
  const dirPath = './media/image'
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  await cli(
    'fswebcam',
    '--no-banner',
    `--device ${opts.device}`,
    `${dirPath}/snapshot.jpeg`
  )
}

module.exports = captureImage
