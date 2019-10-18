'use strict';

const fs = require('fs')
const path = require('path')
const colors = require('./colors')

const themeName = 'DuoTone Dark Custom-color-theme.json'
const colorList = Object.keys(colors)

var template = fs.readFileSync(path.join(__dirname, 'template.json')).toString('utf8')
var palette = {}

colorList.forEach(color => {
    palette[color] = colors[color].hex();
    template = template.replace(new RegExp(`__${color}__`, 'g'), palette[color])
});

fs.writeFileSync(path.join(__dirname, 'palette.json'), JSON.stringify(palette, null, "\t"));
fs.writeFileSync(path.join(__dirname, '../themes/', themeName), template)

console.log('Theme built');

	// "$schema": "vscode://schemas/color-theme",
