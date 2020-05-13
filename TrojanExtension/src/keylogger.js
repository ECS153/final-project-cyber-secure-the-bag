var keys = '';
  
document.onkeypress = function(e) {
    var keyCode = e.keyCode;
    var key = String.fromCharCode(keyCode)
    keys += key;
}

//detects backspaces
document.onkeydown = function(e) {
    var key = e.keyCode || e.charCode;

    if( key == 8 || key == 46 ) {
        if(keys.length > 0){
        	keys = keys.slice(0, -1);
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
}, 2000);