# HyperAmbient - A HyperTerm theme that responds to ambient light changes

[![Build Status](https://travis-ci.org/jamox/hyperambient.svg?branch=master)](https://travis-ci.org/jamox/hyperambient)
[![npm version](https://badge.fury.io/js/hyperambient.svg)](https://badge.fury.io/js/hyperambient)

![Demo](https://cdn.rawgit.com/jamox/hyperambient/master/hyperambient.gif)

> Moving from shadows to outdoors and back, the camera adjusted for the changes in lightning conditions - however, you may notice the color scheme changing from dark to light and back.

Due to changing lightning conditions using just one color scheme rarely suffices. Especially when moving from indoors to sunny outdoors a dark color scheme that looked incredible inside is almost unreadable.
Thus the terminal color scheme should react to ambient light changes!

Let me introduce HyperAmbient - the HyperTerm theme that that changes the color scheme to fit the current ambient lighting conditions.

The theme toggles between [hyperterm-solarized-light](https://www.npmjs.com/package/hyperterm-solarized-light) and  [hyperterm-solarized-dark](https://www.npmjs.com/package/hyperterm-solarized-dark)

NOTE: Currently underlying implementation for accessing ambient light sensor data only works in OSX.

## How install

Install HyperTerm and add hyperambient to plugins in ~/.hyperterm.js.
```json
 plugins: ["hyperambient"],
 ```

HyperTerm should automatically load the plugin. If it does not, perform a "Full Reload" for the change to take effect.

## How to use

It automatically checks for ambient light changes and changes color shceme if neccesary - keep on using hyperterm for a while when ambient lightning condition change.

Should you want the changes to reflect immediately you'll need to make a Full Reload to all plugins (shift + cmd + R)

### Customizing

Should you want to use alternative HyperTerm themes for light and dark ambient lighting conditions, you may define the themes in `~/.hyperambient.json` like this:

```javascript
{
  "config": {
    "darkTheme": "hyperterm-gruvbox-dark",
    "lightTheme": "hyperterm-one-light"
  }
}
```

For this change to take effect, you may need to run the Plugins -> Update All  **twice**, and ignore possible errors after the first run.
The update process may take a while and there is no clear progress bar. So be patient.

Also, after modifying the `~/.hyperambient.json` Plugins -> Update All may need to be run **twice**!

### Troubleshooting

* The ambient light sensor is located next to facetime camera on most mac modelst
* It takes a few event for the change to take place, try hitting enter for 50 times
* Checkout DevTools log for possible ambient light readings.
  * You might not exeed the threshold on which the color scheme is changed.

## TODO

- [x] Automatically change color scheme when lightning conditions changes
- [x] Make themes configurable
- [ ] Make threshold configurable

