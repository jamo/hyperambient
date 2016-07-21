'use strict';

const light = require('hyperterm-solarized-light')
const dark = require('hyperterm-solarized-dark')
const ambient = require('ambientlight')

const threshold = 15000000
exports.decorateConfig = (config) => {
  var theme
  if (lux > threshold ) {
    return light.decorateConfig(config)
  }
  return dark.decorateConfig(config)
}

var ambient_ctr = 0
exports.middleware = (store) => (next) => (action) => {
  ambient_ctr += 1
  if (ambient_ctr > 100) {
    ambient_ctr = 0
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
      console.log(`Ambient light: ${ambient()}`)
      const lux = ambient()
      var theme
      if (lux > threshold ) {
        theme = light.decorateConfig(action.config)
      } else {
        theme =  dark.decorateConfig(action.config)
      }

      const config = action.payload
      return state.set('foregroundColor', theme.foregroundColor)
                  .set('backgroundColor', theme.backgroundColor)
                  .set('borderColor', theme.borderColor)
                  .set('cursorColor', theme.cursorColor)
                  .set('colors', theme.colors)
                  .set('termCSS', theme.termCSS)
                  .set('css', theme.css)
  }
  return state
}

