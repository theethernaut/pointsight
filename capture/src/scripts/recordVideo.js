const cli = require('../helpers/cli')

const opts = {
  device: '/dev/video2',
  width: 1024,
  height: 768,
  framerate: 24,
  output: './media/video.mkv',
  time: 10
}

async function recordVideo() {
  console.log(`Recording video...`)

  await cli(
    'ffmpeg',
    `-f v4l2`,
    `-framerate ${opts.framerate}`,
    `-video_size ${opts.width}x${opts.height}`,
    `-i ${opts.device}`,
    `-t ${opts.time}`,
    `-y`,
    `${opts.output}`
  )
}

module.exports = recordVideo
