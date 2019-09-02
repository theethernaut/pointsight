const cli = require('../helpers/cli')
const fs = require('fs')

const opts = {
  device: '/dev/video2',
  width: 1024,
  height: 768,
  framerate: 24
}

async function recordVideo(seconds) {
  if (!seconds || isNaN(seconds)) {
    seconds = 5
  }

  const dirPath = './media/video'
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  await cli(
    'ffmpeg',
    `-f v4l2`,
    `-framerate ${opts.framerate}`,
    `-video_size ${opts.width}x${opts.height}`,
    `-i ${opts.device}`,
    `-t ${seconds}`,
    `-y`,
    `${dirPath}/snapshot.mkv`
  )
}

module.exports = recordVideo
