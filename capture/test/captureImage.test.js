const { opts, captureImage } = require('../src/scripts/captureImage')
const cli = require('../src/helpers/cli')
const fs = require('fs')
const assert = require('assert')

describe('captureImage command', () => {
  let result

  function deleteFileIfPresent(path) {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path)
    }
  }

  describe('when not specifying --output', () => {
    before('run command', async () => {
      deleteFileIfPresent(opts.defaultOutput)
      result = await cli('./src/program.js image')
    })

    it('result code is 0', async () => {
      assert.equal(result.code, 0)
    })

    it('creates a file', async () => {
      assert.equal(fs.existsSync(opts.defaultOutput), true)
    })
  })

  describe('when specifying --output', () => {
    const path = '/tmp/pointsight/test/image.jpg'

    before('run command', async () => {
      deleteFileIfPresent(path)
      result = await cli(`./src/program.js image --output ${path}`)
    })

    it('result code is 0', async () => {
      assert.equal(result.code, 0)
    })

    it('creates a file', async () => {
      assert.equal(fs.existsSync(path), true)
    })
  })
})
