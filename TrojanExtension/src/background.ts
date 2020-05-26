chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
            if(tabs[0]) {chrome.tabs.sendMessage(tabs[0].id,"active");}
            
        });
    }, { url: [{ urlMatches: 'google.com|facebook.com|amazon.com' } ] });

    // chrome.webNavigation.onCompleted.addListener(() => {
    //     chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
    //         chrome.tabs.sendMessage(id, {site: "facebook.com"});
    //     });
    // }, { url: [{ urlMatches: 'facebook.com' }] });

    // chrome.webNavigation.onCompleted.addListener(() => {
    //     chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
    //         chrome.tabs.sendMessage(id, {site: "amazon.com"});
    //     });
    // }, { url: [{ urlMatches: 'amazon.com' }] });
});


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
