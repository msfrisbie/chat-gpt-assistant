# Summarize

Browser Extension to integrate ChatGPT everywhere:

- Right click context menus
- Browser omnibar
- Extension popup
- Dedicated extension tab

<img src="static/popup.png" alt="Popup" width="500"/>
Quickly access ChatGPT with the CMD + Shift + Y command

<img src="static/omnibox.png" alt="Omnibox" width="500"/>
Send ChatGPT prompts from the omnibox

<img src="static/contextmenu.png" alt="Context Menu" width="500"/>
Select text and right click to send it as a ChatGPT prompt

<img src="static/google.png" alt="Google" width="500"/>
Use ChatGPT in a dedicated extension tab

<img src="static/options.png" alt="Options" width="500"/>
Automatically send search engine queries as prompts

## Installation

### Install to Chrome/Edge

#### Local Install

1. Download the latest release from [Releases](https://github.com/msfrisbie/chat-gpt-assistant/releases)
2. Unzip the file
3. In Chrome/Edge go to the extensions page (`chrome://extensions` or `edge://extensions`).
4. Enable Developer Mode.
5. Drag the unzipped folder anywhere on the page to import it (do not delete the folder afterwards).

## Build from source

1. Clone the repo
2. Install dependencies with `yarn`
3. Run `npm run start`
4. Load the `dist` directory to your browser

## Credit

This project is inspired by [wong2/chat-gpt-google-extension](https://github.com/wong2/chat-gpt-google-extension)
