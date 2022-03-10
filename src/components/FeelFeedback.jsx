import React, { useState } from "react";
import Stack from "@mui/material/Stack"; //並び方決めるやつ
import FeedbackButton from "./FeedbackButton";

const buttonsInfo = [
  { color: "#FF7043", value: 1, label: "Too Hot" },
  { color: "#4DB6AC", value: 0, label: "Comfortable" },
  { color: "#42A5F5", value: -1, label: "Too Cold" },
];

export default function FeelFeedback(props) {
  const feedbackButtons = buttonsInfo.map((info) => (
    <FeedbackButton color={info.color} value={info.value} label={info.label} />
  ));

  return (
    <Stack spacing={2} direction="row">
      {feedbackButtons}
    </Stack>
  );
}
