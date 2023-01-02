import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function EmailBuilder() {
  return (
    <TextareaAutosize
      className="tw-p-2 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-neutral-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
      placeholder="Write your thoughts here..."
    />
  );
}
