'use strict';

const fs = require('fs');
const path = require('path');

var json = JSON.parse(fs.readFileSync(path.join(__dirname, 'template.json')));

var uniqueColors = new Set(Object.values(json.colors));

var uniqueTokenColors = new Set();

Object.values(json.tokenColors).forEach(token => {
    if (token.settings.foreground !== undefined) {
        uniqueTokenColors.add(token.settings.foreground)
    }
});

var fullMap = {
    colors: Array.from(uniqueColors),
    tokenColors: Array.from(uniqueTokenColors)
};

fs.writeFileSync(path.join(__dirname, 'fullMap.json'), JSON.stringify(fullMap, null, '\t'));
