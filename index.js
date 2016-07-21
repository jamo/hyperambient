'use strict';

const light = require('hyperterm-solarized-light')
const dark = require('hyperterm-solarized-dark')
const ambient = require('ambientlight')

const threshold = 15000000

exports.decorateConfig = (config) => {
  const lux = ambient()
  if (lux > threshold ) {
    return light.decorateConfig(config);
  }
  return dark.decorateConfig(config);
}

