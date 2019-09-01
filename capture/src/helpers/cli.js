const path = require('path')
const exec = require('child_process').exec

module.exports = function cli(executable, ...args) {
  const cwd = '.'
  const command = `${executable} ${args.join(' ')}`
  console.log(command)

  return new Promise(resolve => {
    exec(
      command,
      { cwd },
      (error, stdout, stderr) => {
        const err = error || stderr
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
