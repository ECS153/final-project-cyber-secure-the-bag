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
