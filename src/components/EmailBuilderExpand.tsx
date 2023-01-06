import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  EMAIL_LENGTH_OPTIONS,
  EMAIL_STYLE_OPTIONS,
  EMAIL_TONE_OPTIONS,
  EMAIL_URGENCY_OPTIONS,
} from "../consts";
import {
  setEmailLength,
  setEmailStyle,
  setEmailTone,
  setEmailUrgency,
} from "../features/email/emailSlice";
import { IRootState } from "../features/interfaces";

export default function EmailBuilderExpand() {
  const emailState = useSelector((state: IRootState) => state.email);
  const dispatch = useDispatch();

  return (
    <>
      <div className="tw-grid tw-grid-cols-4 tw-gap-4">
        <div>
          <Form.Label className="tw-text-xs tw-text-gray-400">
            Length:
          </Form.Label>

          <Form.Select
            size="sm"
            value={emailState.emailLength}
            onChange={(e) =>
              dispatch(setEmailLength({ emailLength: e.target.value }))
            }
          >
            {EMAIL_LENGTH_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-xs tw-text-gray-400">
            Style:
          </Form.Label>

          <Form.Select
            size="sm"
            value={emailState.emailStyle}
            onChange={(e) =>
              dispatch(setEmailStyle({ emailStyle: e.target.value }))
            }
          >
            {EMAIL_STYLE_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-xs tw-text-gray-400">
            Urgency:
          </Form.Label>

          <Form.Select
            size="sm"
            value={emailState.emailUrgency}
            onChange={(e) =>
              dispatch(setEmailUrgency({ emailUrgency: e.target.value }))
            }
          >
            {EMAIL_URGENCY_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Label className="tw-text-xs tw-text-gray-400">Tone:</Form.Label>

          <Form.Select
            size="sm"
            value={emailState.emailTone}
            onChange={(e) =>
              dispatch(setEmailTone({ emailTone: e.target.value }))
            }
          >
            {EMAIL_TONE_OPTIONS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </Form.Select>
        </div>
      </div>
    </>
  );
}
