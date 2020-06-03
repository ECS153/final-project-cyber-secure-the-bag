# Basic Structure of Code
To implement our Trojan extension, we used:
1. The Angular framework to structure our whole extension - both the malicious and non-malicious software
* The non-malicious software will be the code to build a UC Davis themed emoji keyboard. This logic will primarily be in the Angular files which control the popup (the files in the src/app folder). These files are HTML, CSS, and TypeScript files.
* The malicious software will be the code to build a keylogger and the background and content scripts needed to collect information of targeted websites. These scripts will be written in JavaScript.
   * `src/keylogger.js`: A content script which records all content typed on a page. 
      - All `keyup` and `mouseup` actions and saves associated HTML elements in an `Object` as keys. 
      - Records all keys typed in a page (including backspaces, copy/paste) using `onkeypress` and `onkeydown` event listeners, and saves them in the `Object` as values (mapped to their respective HTML elements)
      - Sends `Object` to our background script `background.ts` through message passing on page `unload`
   * `src/background.ts`: A background script which saves relevant keylogged data to local storage
      - listens for an `Object` to be sent via message passing from the content script
      - if the current URL is one of interest, saves a new `Object` to local storage that maps the current site to the keylogger `Object`
2. The database we will use is the Cloud Firestore database supported by the Google Firebase environment.
3. The web application to fetch data from the database for visualization will be another Angular web application.
