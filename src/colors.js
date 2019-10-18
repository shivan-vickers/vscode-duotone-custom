const chroma = require('chroma-js')

// Hues
var syntaxUno = 223;
var syntaxDuo = 343;

// Language colors

// Uno hue
var uno1 = chroma.hsl(syntaxUno, 0.43, 0.83);
var uno2 = chroma.hsl(syntaxUno, 0.60, 0.70);
var uno3 = chroma.hsl(syntaxUno, 0.43, 0.41);
var uno4 = chroma.hsl(syntaxUno, 0.12, 0.46);
var uno5 = chroma.hsl(syntaxUno, 0.10, 0.32);

// Duo hue
var duo1 = chroma.hsl(syntaxDuo, 0.52, 0.56);
var duo2 = chroma.hsl(syntaxDuo, 0.52, 0.38);
var duo3 = chroma.hsl(syntaxDuo, 0.06, 0.46); 

// Base colors
var syntaxFg              = uno2;
var syntaxBg              = chroma.hsl(syntaxUno, 0.25, 0.14);
var syntaxAccent          = chroma.hsl(syntaxDuo, 1.00, 0.66);
var syntaxGuide           = syntaxBg.brighten(0.1);
var syntaxSelection       = syntaxBg.brighten(0.2);
var syntaxSelectionGutter = syntaxBg.brighten(0.3);
var syntaxCursorLine      = syntaxSelection.alpha(0.74);

module.exports = {
    uno1,
    uno2,
    uno3,
    uno4,
    uno5,
    duo1,
    duo2,
    duo3,
    syntaxFg,
    syntaxBg,
    syntaxAccent,
    syntaxGuide,
    syntaxSelection,
    syntaxSelectionGutter,
    syntaxCursorLine
};