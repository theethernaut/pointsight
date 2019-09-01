const cli = require('../helpers/cli')

const opts = {
  device: '/dev/video2',
  output: './media/snapshot.jpg'
}

async function captureImage() {
  // Build image path.
  const unixDate = Math.floor(new Date().getTime() / 1000)
  const filepath = `./media/${unixDate}.jpeg`

  console.log(`Capturing image...`)

  await cli('fswebcam', `--device ${opts.device}`, `${opts.output}`)
}

module.exports = captureImage
