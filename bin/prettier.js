const fs = require('fs')
const path = require('path')

const prettier = require('prettier')
const program = require("commander")
const chalk = require('chalk')
const ora = require('ora')

const pkgJson = require('./../package.json')
const print = console.log

program
  .version(pkgJson.version)

program
  .option('-t, --target <folder>', 'target folder')
  .option('-c, --check', 'check code formatter')
  .option('-l, --lint', 'lint code formatter')
  
program.parse(process.argv)

let files = []

if (program.target) {
  files = 
    readDir(program.target)
    .filter(file => file.path.endsWith('.md'))
  
  if (!files.length) {
    print(chalk.grey('INFO: no markdown found'))
    process.exit(0)
  }
} else {
  print(chalk.red('ERROR: "-t, --target" is required'))
  process.exit(1)
}

if (program.lint || program.check) {
  files.forEach(file => {
    const { path, content } = file
    process.stdout.write('\b'.repeat(10000))
    process.stdout.write(chalk.grey(`INFO: check ${path}`))
    
    const valid = prettier.check(content, { filepath: path })
    file.check = valid

    if (!valid && !program.lint) {
      print(chalk.red(`ERROR: ${path} lint check fails`))
      process.exit(1)
    }
  })
  process.stdout.write('\b'.repeat(10000))
  process.stdout.write(chalk.green('SUCCESS: all files lint check pass'))
}

if (program.lint) {
  files.forEach(file => {
    const { content, check, path } = file
    if (check) {
      print(chalk.grey(`INFO: lint ${path}`))
      return
    }

    print(`INFO: lint ${path}`)

    const validContent = prettier.format(content, { filepath: path })
    fs.writeFileSync(path, validContent, { flag: 'w' })
  })

  print(chalk.green('SUCCESS: all files linted'))
}


/**
 * 是否是文件夹
 * @param {String} folder 文件夹路径
 */
function isFolder(folder) {
  return fs.existsSync(folder) && fs.statSync(folder).isDirectory()
}

/**
 * 读取指定文件夹下的所有文件
 * @param {String} folder 文件夹路径
 * @return {Array} 指定文件夹下的所有文件
 */
function readDir(folder) {
  if (!fs.existsSync(folder) || !isFolder(folder)) {
    print(chalk.red(`ERROR: ${folder} is not a folder`))
    process.exit(1)
  }

  const result = []
  findAllFiles(fs.realpathSync(folder))
  return result
  
  function findAllFiles(root) {
    const files = fs.readdirSync(root)
    files.forEach(name => {
      const file = path.resolve(root, name)
      if (isFolder(file)) {
        findAllFiles(file)
      } else {
        result.push({
          path: file,
          check: false,
          content: fs.readFileSync(file).toString()
        })
      }
    })
  }
}