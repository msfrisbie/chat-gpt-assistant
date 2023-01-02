import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ai from "../assets/images/ai.png";
import EmailBuilder from "./EmailBuilder";

export default function EmailContentScript() {
  //   const [showOverlay, setShowOverlay] = useState(false);
  //   const [expandOverlay, setExpandOverlay] = useState(true);

  //   const query = useSelector((state: IRootState) => state.search.query);
  //   const inputText = useSelector((state: IRootState) => state.search.inputValue);
  //   const chatGptResultState = useSelector(
  //     (state: IRootState) => state.search.chatGptResultState
  //   );
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     getAllSettings().then((settings) => {});
  //   }, []);

  //   const search = () => {
  //     dispatch(executeSearch({ prompt: q }));
  //   };

  //   const openSettings = () => {
  //     chrome.runtime.sendMessage({
  //       type: ChatGptMessageType.OPEN_SETTINGS,
  //     });
  //   };

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {!expanded && (
        <div
          className="tw-cursor-pointer hover:tw-bg-neutral-300 tw-shadow-xl tw-rounded-full tw-grid tw-place-items-center tw-w-12 tw-h-12 tw-border tw-border-neutral-200 tw-bg-white dark:tw-bg-neutral-800"
          onClick={() => setExpanded(true)}
        >
          <img className="tw-w-8" src={ai} />
        </div>
      )}
      {expanded && (
        <div
          style={{ maxHeight: "80vh", width: "400px" }}
          className="tw-w-full tw-flex tw-flex-col tw-items-stretch tw-bg-white tw-text-gray-800 dark:tw-text-white dark:tw-bg-neutral-800 tw-rounded-xl tw-border tw-border-solid tw-border-neutral-200 tw-overflow-y-auto"
        >
          <Card className="tw-shadow-xl dark:tw-bg-neutral-800">
            <Card.Body>
              <EmailBuilder></EmailBuilder>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}
