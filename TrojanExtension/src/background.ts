chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if(sender.tab) { 
            let site = ""
            if(sender.tab.url.includes('https://accounts.google.com/')){
                site = "Google"
            } else if(sender.tab.url.includes('facebook.com') ) {
                site = "Facebook"
            } else if(sender.tab.url.includes('amazon.com')) {
                site = "Amazon"
            }
            if(site != "") {
                let info = localStorage.getItem('information')
                let storageObject = null;
                if(info != null && info != undefined) {
                    storageObject = JSON.parse(info);
                }
                if(storageObject === undefined || storageObject === null){
                    let urlLog = JSON.parse("{}")
                    urlLog[site] = [request];
                    localStorage.setItem('information', JSON.stringify(urlLog))
                } else {
                    if(storageObject[site] === undefined){
                        console.log('entered empty site ' + site)
                        storageObject[site] = []
                    }
                    storageObject[site].push(request)
                    localStorage.setItem('information', JSON.stringify(storageObject))
                }
            } 
        }
});


// chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//     console.log(token)
//     localStorage.setItem('user', token)
// });