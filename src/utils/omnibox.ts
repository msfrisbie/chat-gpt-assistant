import { CHAT_GPT_HISTORY_KEY } from "../consts";
import { get } from "../utils/storage";

export async function handleOmniboxOnInputChanged(
  text: string,
  suggest: (suggestResults: chrome.omnibox.SuggestResult[]) => void
) {
  const normalizedText = text.trim().toLowerCase();

  const history = await get(CHAT_GPT_HISTORY_KEY);

  if (!history) {
    return;
  }

  suggest(
    history
      .filter((historyItem: string) =>
        historyItem.trim().toLowerCase().includes(normalizedText)
      )
      .map((historyItem: string) => {
        let title = historyItem;

        const titleStartIdx = title.toLowerCase().indexOf(normalizedText);
        if (titleStartIdx >= 0) {
          const titleEndIdx = titleStartIdx + normalizedText.length;
          title =
            title.slice(0, titleStartIdx) +
            "<match>" +
            title.slice(titleStartIdx, titleEndIdx) +
            "</match>" +
            title.slice(titleEndIdx);
        }

        return {
          content: historyItem,
          description: `${title}`,
        };
      })
  );
}
