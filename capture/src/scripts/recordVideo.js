const cli = require('../helpers/cli')
const fs = require('fs')

const opts = {
  device: '/dev/video2',
  width: 1024,
  height: 768,
  framerate: 24,
  outputDir: '/tmp/pointsight/video',
  outputFile: 'video.mkv'
}

async function recordVideo(seconds) {
  if (!seconds || isNaN(seconds)) {
    seconds = 5
  }

  if (!fs.existsSync(opts.outputDir)) {
    fs.mkdirSync(opts.outputDir, { recursive: true })
  }

  await cli(
    'ffmpeg',
    `-f v4l2`,
    `-framerate ${opts.framerate}`,
    `-video_size ${opts.width}x${opts.height}`,
    `-i ${opts.device}`,
    `-t ${seconds}`,
    `-y`,
    `${opts.outputDir}/${opts.outputFile}`
  )
}

module.exports = recordVideo
