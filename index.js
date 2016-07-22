'use strict'

const { homedir } = require('os')
const { readFileSync, accessSync } = require('fs')
const { resolve } = require('path')

const ambient = require('ambientlight')

const configfile = resolve(homedir(), '.hyperambient.json')
var ambientConfig = { config: {} }
try {
  accessSync(configfile)
  ambientConfig = JSON.parse(readFileSync(configfile, 'utf-8'))
} catch (e) {
  // NOP
}

const light = require(ambientConfig.config.lightTheme || 'hyperterm-solarized-light')
const dark = require(ambientConfig.config.darkTheme || 'hyperterm-solarized-dark')

// Selected by taking multiple measurements from multiple inside and outside by
// using the ambientlight library
const threshold = 15000000

exports.decorateConfig = (config) => {
  const lux = ambient()

  if (lux > threshold) {
    return light.decorateConfig(config)
  }
  return dark.decorateConfig(config)
}

var ambientCounter = 0
exports.middleware = (store) => (next) => (action) => {
  ambientCounter += 1
  if (ambientCounter > 100) {
    ambientCounter = 0
    store.dispatch({
      type: 'UPDATE_THEME',
      config: config.getConfig()
    })
  }
  next(action)
}

exports.reduceUI = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      const lux = ambient()
      const oldReading = state.hyperambient || 0
      const isBetween = Math.min(lux, oldReading) <= threshold && threshold <= Math.max(lux, oldReading)
      console.log(`Ambient light: ${lux}`)

      if (!isBetween) {
        // No need to change the theme
        return state.set('hyperambient', lux)
      }

      var theme
      if (lux > threshold) {
        theme = light.decorateConfig(action.config)
      } else {
        theme = dark.decorateConfig(action.config)
      }

      return state.set('foregroundColor', theme.foregroundColor)
                  .set('backgroundColor', theme.backgroundColor)
                  .set('borderColor', theme.borderColor)
                  .set('cursorColor', theme.cursorColor)
                  .set('colors', theme.colors)
                  .set('termCSS', `${config.termCSS || ''} ${theme.termCSS}`)
                  .set('css', `${config.css || ''} ${theme.css}`)
                  .set('hyperambient', lux)
  }
  return state
}

exports.mapTermsState = (state, map) => {
  return Object.assign(map, {
    hyperambient: state.ui.hyperambient
  })
}

exports.getTermProps = (uid, parentProps, props) => {
  return Object.assign(props, {
    hyperambient: parentProps.hyperambient
  })
}

