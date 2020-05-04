## Problem we are solving
There are dangers to posed to users when trusting browser extensions with Google permissions. We aim to demonstrate how vague permission descriptions can render users vulnerable to attacks by malicious extensions.

## Importance
People tend to download software without reading all terms & conditions/permissions. Additionally, people who do read the permissions are still unaware of the full access that they are granting to outside parties resulting in personal data being put at risk. 

## What we plan to build
1. **Chrome Extension**
We plan to build a fully functional chrome extension, which offers some desirable function to users. The extension will request access to certain Google permissions which will seem reasonable based on the extension’s description. 
2. **Keylogger** We will build a keylogger and discretely embed it in our Chrome extension. We will use this keylogger to maliciously collect information about the user when they visit certain websites.
3. **Associated Scripts** We will track web data (using the Google API enabled by our extension’s permissions) to collect information about sites visited by the users. We will then trigger the keylogger based on the site. For example, detecting when the user is entering a username/password.
4. **Database** We also will build a backend connected to a database which will keep track of the information collected through keylogging.
In order to test the effectiveness of our “Trojan Extension,” we plan to publish a non-malicious version of the extension that requests the same permissions, in order to see if users will still download it.

## Expected Results
We expect that users will not be deterred by the requested permissions, and will install our extension if it seems useful. In doing this, we can demonstrate how easy it is to get malicious code on a user’s browser.

