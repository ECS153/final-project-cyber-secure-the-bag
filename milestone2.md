# Milestone 2
## Video:
- https://github.com/ECS153/final-project-cyber-secure-the-bag/blob/master/Milestone2Video.mp4

## All:
- Work on design docs

## Shivani:
- Updated keylogger to support copy/paste, fixed bug with backspace logic in keylogger, prints keylog information to console after user clicks ENTER (for testing purposes): https://github.com/ECS153/final-project-cyber-secure-the-bag/commit/245895103ac5191abaec5fa4d38c91bd5f648103               
- Worked on base Chrome extension (UC Davis Themed Emoji Board). Implemented logic to copy emoji when clicked on in the emoji keyboard displayed in the popup window of the Chrome extension: https://github.com/ECS153/final-project-cyber-secure-the-bag/commit/3735ab300b7fa09c5f820963c8b7f3e3184917a2
- Next Week: Add autofill option for emoji's from emoji keyboard. Implement "recently used" section for emoji keyboard.

## Trevor:
- Created seperate TrojanApp in order to view and manipulate the database as needed from the attacker's perspective. This gives us the potential to parse potentially vast and messy data as needed: https://github.com/ECS153/final-project-cyber-secure-the-bag/commit/e421d8025e7e08299744d5091ede1ee150a85b2c
- Worked on design document for design of data
- Next Week: come up with parsing and statistical analysis for finding likely password and username for each domain.

## Orli:
- This Week:
                
  - Added a background script that uses google permissions to only enable the popup on certain urls (used google.com): https://github.com/ECS153/final-project-cyber-secure-the-bag/commit/85ebadbbdcdcc7839eb939bd16fe19704752d08b
                
  - Added keylogger as a content script to the manifest so that it runs in the background on certain urls (used google.com)
  
  - Send current URL in JSON string from background script to content script whenever running on certain urls, allowed content script and popup to run on more sites (google.com, facebook.com, amazon.com)
- Next Week: Make keylogger active on signup pages only (for Google, Facebook, Amazon...), associate logged data to HTML sign up form elements and add that to the keylog data 

## Cameron:
- rewrote app.component.html to reflect the popup window of schedule builder. Displays features of the Trojan part of the app as well as an explicit message stating data is being read
- Started working on new emoji popup User interface. Interface with buttons that will copy emoji to be pasted by the user.  
- https://github.com/ECS153/final-project-cyber-secure-the-bag/commit/946b45ccc456d5ea31ee6517993a4d6ae12ad860
- Next Week: Improve UI of the emoji board in the popup window. Add categories + filter by category feature.
