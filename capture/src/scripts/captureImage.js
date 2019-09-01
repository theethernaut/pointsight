function captureImage() {
  // Build image path.
  const unixDate = Math.floor(new Date().getTime() / 1000)
  const filepath = `./media/${unixDate}.jpeg`

  console.log(`Capturing image...`)

  // TODO
}

module.exports = captureImage
