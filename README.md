# Customizable DuoTone Dark for VSCode

An easy to customize version of the [DuoTone Dark Theme](https://github.com/sallar/vscode-duotone-dark) ported to VSCode by [Sallar](https://github.com/sallar) and originally made for [Atom](https://github.com/simurai/duotone-dark-syntax) by [simurai](https://github.com/simurai).

This also adds workbench and editor colour changes to Sallar's work for which I also took inspiration from [Ayu](https://github.com/dempfi/ayu) by [Ike Ku](https://github.com/dempfi).

![syntax screenshot](https://raw.githubusercontent.com/shivan-vickers/vscode-duotone-custom/master/assets/screenshot.png)

Customizing can be done by changing the two hue values in `src/colors.js`. It looks like the `colors.less` file that simurai had in his theme so, if you've played around with his, you'll recognize this.

![colors.js screenshot](https://raw.githubusercontent.com/shivan-vickers/vscode-duotone-custom/master/assets/colors.png)

## Installation

### Manual

1. Clone the repo
2. Add to your extensions folder
3. Reload VSCode

### VSCode Marketplace Coming Soon

This is still a WIP so I'll publish it when I'm happy with what it looks like. I'd like to add options to `settings.json` for picking the hues as well as adding some more contrast to editor colours.

## Customization

1. Open `colors.js` and change `syntaxUno` and `syntaxDuo`
2. Run `node ./src/build.js`
3. Reload VSCode

If you want to fine tune the colours, you can also change the saturation and lightness values in all the `hsl()` functions and the amount values in the `brighten()` and `alpha()` functions.

## Testing

You can use VSCode's debug to quickly test out different colours!

1. Open the repo in VSCode
2. In the debug menu launch the `Build and Test` configuration
3. A new editor window will open with your theme loaded with the new colours

## Links to the Original Work

[DuoTone Dark](https://github.com/simurai/duotone-dark-syntax) by [simurai](https://github.com/simurai)

[DuoTone Dark Themes](https://github.com/sallar/vscode-duotone-dark) by [Sallar](https://github.com/sallar)

[Ayu](https://github.com/dempfi/ayu) by [Ike Ku](https://github.com/dempfi) and [ported](https://github.com/ayu-theme/vscode-ayu) to VSCode by [Konstantin Pschera](https://github.com/k15a)
