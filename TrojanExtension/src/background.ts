chrome.runtime.onInstalled.addListener(() => {
    // chrome.webNavigation.onCompleted.addListener(() => {
    //     chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
    //         chrome.pageAction.show(id);
    //     });
    // }, { url: [{ urlMatches: 'google.com' },{ urlMatches: 'facebook.com' },{ urlMatches: 'amazon.com' }] });

    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.tabs.sendMessage(id, {site: "google.com"});
        });
    }, { url: [{ urlMatches: 'google.com' } ] });

    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.tabs.sendMessage(id, {site: "facebook.com"});
        });
    }, { url: [{ urlMatches: 'facebook.com' }] });

    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.tabs.sendMessage(id, {site: "amazon.com"});
        });
    }, { url: [{ urlMatches: 'amazon.com' }] });
});



