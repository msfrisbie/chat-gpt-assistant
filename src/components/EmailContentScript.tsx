import React from "react";
import { Card } from "react-bootstrap";
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

  return (
    <>
      <div
        style={{ maxHeight: "80vh" }}
        className="tw-bg-white tw-text-gray-800 dark:tw-text-white dark:tw-bg-neutral-800 tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-overflow-y-auto"
      >
        <Card className="dark:tw-bg-neutral-800">
          <Card.Body>
            <EmailBuilder></EmailBuilder>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
