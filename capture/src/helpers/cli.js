const path = require('path')
const exec = require('child_process').exec

module.exports = function cli(executable, ...args) {
  const cwd = '.'
  const command = `${executable} ${args.join(' ')}`

  return new Promise(resolve => {
    exec(
      command,
      { cwd },
      (error, stderr, stdout) => {
        let err = error

        if (!err) {
          if (stderr && stderr.length > 0) {
            err = stderr
          }
        }

        if (err) {
          throw err
        }

        resolve({
          code: err ? 1 : 0,
          error: err,
          stdout,
          stderr
        })
      }
    )
  })
}
