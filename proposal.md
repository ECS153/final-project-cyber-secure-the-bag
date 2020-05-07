## The Problem
When users trust browser extensions that require the authorization of permissions, they are at risk of allowing these extensions to abuse these permissions and carry out attacks. We aim to demonstrate how vague permission descriptions can render users vulnerable to attacks by creating a malicious extension which keylogs the user's data on various websites.

## Importance
People tend to download software without reading all terms & conditions/permissions. Additionally, people who do read the permissions are still unaware of the full access that they are granting to outside parties resulting in personal data being put at risk. 

## What We Plan to Build
1. **Base Chrome Extension:** We plan to build a fully functional Chrome extension which offers some desirable function to users. The extension will request access to certain Google permissions which will seem reasonable based on the extension’s description. 
2. **Keylogger:** We will build a keylogger and discretely embed it in our Chrome extension. We will use this keylogger to maliciously collect information about the user when they visit certain websites.
3. **Malicious Scripts:** We will track web data (using the Google API enabled by our extension’s permissions) to collect information about sites visited by the users. We will then trigger the keylogger based on the site. For example, we would activate the keylogger once we have detected that the user is entering a username/password.
4. **Database:** We will send collected data from the keylogger to a database. 

In order to test the effectiveness of our “Trojan Extension,” we plan to publish a non-malicious version of the extension that requests the same permissions to see if users will still download it.

## Expected Results
We expect that users will not be deterred by the requested permissions and will install our extension if it seems useful. In doing this, we can demonstrate how easy it is to get malicious code on a user’s browser.