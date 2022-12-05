# Summarize

Browser Extension to integrate ChatGPT everywhere:

- Right click context menus
- Browser omnibar
- Extension popup
- Dedicated extension tab

|   <img src="static/popup.png" alt="Popup" width="500"/>   |
| :-------------------------------------------------------: |
| _Quickly access ChatGPT with the CMD + Shift + Y command_ |

| <img src="static/omnibox.png" alt="Popup" width="500"/> |
| :-----------------------------------------------------: |
| _Type "gpt" + space in the omnibox to send ChatGPT prompts from the omnibox_  |

| <img src="static/contextmenu.png" alt="Context Menu" width="500"/> |
| :----------------------------------------------------------------: |
|    _Select text and right click to send it as a ChatGPT prompt_    |

| <img src="static/options.png" alt="Google" width="500"/> |
| :------------------------------------------------------: |
|        _Use ChatGPT in a dedicated extension tab_        |

| <img src="static/google.png" alt="Options" width="500"/> |
| :------------------------------------------------------: |
|  _Automatically send search engine queries as prompts_   |

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
