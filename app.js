const button = document.querySelector('.button');
const content = document.querySelector('.content');

const borderWidth = document.querySelector('.borderWidth');
const borderStyle = document.querySelector('.borderStyle');
const borderColor = document.querySelector('.borderColor');

const textColor = document.querySelector('.textColor');
const backgroundColor = document.querySelector('.backgroundColor');

const fontFamily = document.querySelector('.fontFamily');
const fontWeight = document.querySelector('.fontWeight');
const fontSize = document.querySelector('.fontSize');

const fontFamilies = [
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    " 'Times New Roman', Times, serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    'Arial, Helvetica, sans-serif',
    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    "Georgia, 'Times New Roman', Times, serif",
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    ' Verdana, Geneva, Tahoma, sans-serif',
    'cursive',
    'fantasy',
    'monospace',
    'sans-serif;',
    'serif',
];

const borderStyles = [
    'dashed', 
    'dotted', 
    'double', 
    'groove', 
    'hidden', 
    'ridge', 
    'solid'
];

button.addEventListener('click', changeView);

function changeView() {
    changeStyle(
        'borderWidth', 
        `${randomInteger(1, 20)}px`,
        borderWidth
    );
    changeStyle(
        'borderStyle',
        borderStyles[randomInteger(0, borderStyles.length - 1)],
        borderStyle
    );
    changeStyle(
        'borderColor',
        `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`,
        borderColor
    );

    changeStyle(
        'color',
        `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`,
        textColor
    );
    changeStyle(
        'backgroundColor',
        `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`,
        backgroundColor
    );

    changeStyle(
        'fontFamily', 
        fontFamilies[randomInteger(0, fontFamilies.length - 1)], 
        fontFamily
    );
    changeStyle(
        'fontWeight', 
        randomInteger(100, 600), 
        fontWeight
    );
}

function changeStyle(styleName, value, element, parent = content) {
    parent.style[styleName] = value;
    changeHTML(element, value);

    if (styleName === 'backgroundColor') {
        document.body.style.backgroundColor = value;
    }
}

function changeHTML(element, value) {
    element.textContent = value;
}

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
