// chrome.runtime.onInstalled.addListener(() => {
//     chrome.webNavigation.onCompleted.addListener(() => {
//         chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
//             if(tabs[0]) {chrome.tabs.sendMessage(tabs[0].id,{from: "background"});}
            
//         });
//     }, { url: [{ urlMatches: 'messenger.com' } ] });

// });

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        var urlLog = new Object();
        if(sender.tab) { 
            if(sender.tab.url.includes('https://accounts.google.com/signup/') ||sender.tab.url.includes('facebook.com') || sender.tab.url.includes('amazon.com')) {
                urlLog[sender.tab.url] = request;
                console.log(urlLog);
            } 
        }
});
