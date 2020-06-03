# Basic Structure of Code
To implement our Trojan extension, we used:
1. The Angular framework to structure our whole extension - both the malicious and non-malicious software
    * The non-malicious software will be the code to build a UC Davis themed emoji keyboard. This logic will primarily be in the Angular files which control the popup (the files in the src/app folder). These files are HTML, CSS, and TypeScript files.
    * The malicious software will be the code to build a keylogger and the background and content scripts needed to collect information of targeted websites. These scripts will be written in JavaScript.
2. The database we will use is the Cloud Firestore database supported by the Google Firebase environment.
3. The web application to fetch data from the database for visualization will be another Angular web application.
