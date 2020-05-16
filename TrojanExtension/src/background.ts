// import { AppComponent } from './app/app.component';

chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.pageAction.show(id);
            // AppComponent.foo();
        });
    }, { url: [{ urlMatches: 'google.com' }] });
});