# HyperAmbient - A HyperTerm theme that responds to ambient light changes

Due to changing lightning conditions using just one color scheme rarely suffices. Especially when moving from indoors to sunny outdoors a dark color scheme that looked incredible inside is almost unreadable.
Thus the terminal color scheme should react to ambient light changes!

Let me introduce HyperAmbient - the HyperTerm theme that that changes the color scheme to fit the current ambient lighting conditions.

The theme toggles between [hyperterm-solarized-light](https://www.npmjs.com/package/hyperterm-solarized-light) and  [hyperterm-solarized-dark](https://www.npmjs.com/package/hyperterm-solarized-dark)

NOTE: Currently underlying implementation for accessing ambient light only works in OSX.

## How install

Install HyperTerm and add hyperambient to plugins in ~/.hyperterm.js.

## How to use

When lightning conditions change, reload plugins so that the color scheme can be changed if necessary.

## TODO

- [x] Automatically change color scheme when lightning conditions changes
- [ ] Make themes configurable
