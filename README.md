# HyperAmbient - A HyperTerm theme that responds to ambient light changes

![Demo](https://github.com/jamox/hyperambient/blob/master/hyperambient.gif)

> Moving from shadows to outdoors and back, the camera adjusted for the light changes - however, you may notice the color scheme changing from dark to light and back.

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

## How to use

It automatically checks for ambient light changes and changes color shceme if neccesary - keep on using hyperterm for a while when ambient lightning condition change.

Should you want the changes to reflect immediately you'll need to make a Full Reload to all plugins (shift + cmd + R)

### Troubleshooting

* The ambient light sensor is located next to facetime camera on most mac models
* It takes a few event for the change to take place, try hitting enter for 50 times
* Checkout DevTools log for possible ambient light readings.
  * You might not exeed the threshold on which the color scheme is changed.

## TODO

- [x] Automatically change color scheme when lightning conditions changes
- [ ] Make themes configurable
- [ ] Make threshold configurable

