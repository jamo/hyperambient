const { homedir } = require('os')
const { readFileSync, writeFileSync, accessSync } = require('fs')
const { resolve } = require('path')

const configfile = resolve(homedir(), '.hyperambient.json')

try {
  accessSync((configfile))
} catch (e) {
  process.exit(0)
}

const ambientConfig = JSON.parse(readFileSync(configfile, 'utf-8'))

const packageJson = require('./package')
packageJson.dependencies[ambientConfig.config.lightTheme] = 'latest'
packageJson.dependencies[ambientConfig.config.darkTheme] = 'latest'

console.log(packageJson.dependencies)
writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n')

