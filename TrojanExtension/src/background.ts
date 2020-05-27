<<<<<<< HEAD
chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
            if(tabs[0]) {chrome.tabs.sendMessage(tabs[0].id,"active");}
        });
    }, { url: [{ urlMatches: 'google.com|facebook.com|amazon.com' } ] });
=======
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.webNavigation.onCompleted.addListener(() => {
//         chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
//             if(tabs[0]) {chrome.tabs.sendMessage(tabs[0].id,{from: "background"});}
            
//         });
//     }, { url: [{ urlMatches: 'messenger.com' } ] });
>>>>>>> 66d5480d333994d81a80001ed8fcdf8a97eecc5e

// });

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