import * as React from "react";
import Stack from "@mui/material/Stack";

export default function BasicButtons() {
  const images = [
    {
      url: "images/clothes/Tshirt.png",
      title: "Tshirt",
    },
    {
      url: "images/clothes/Shirt.png",
      title: "Shirts",
    },
  ];

  return (
    <Stack spacing={2} direction="row">
      <img src={images[0].url} />
      <img src={images[1].url} />
    </Stack>
  );
}
