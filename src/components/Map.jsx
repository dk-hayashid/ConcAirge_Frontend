import React, { useState } from "react";
import FeelFeedback from "./FeelFeedback";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Map(props) {
  const Base64 = ({ data }) => (
    <img src={`data:image/jpeg;base64,${data}`} width="100%" />
  );
  const [done, setDone] = useState("");
  return (
    <Container maxWidth="md" sx={{ marginTop: 20, backgroundColor: "#FBF8F1" }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h4">
            あなたの快適温度は{props.comTem}℃です。
          </Typography>
        </Grid>
        <Grid item>
          <Base64 data={props.map} />
        </Grid>

        {done === "done" && (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h4">
              フィードバックありがとうございました!
            </Typography>
          </Grid>
        )}

        {props.token !== "guestuser" && (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {done !== "done" && (
              <Typography variant="h4">快適でしたか？</Typography>
            )}
          </Grid>
        )}
        {props.token !== "guestuser" && (
          <Grid item>
            {done !== "done" && (
              <FeelFeedback
                userName={props.userName}
                comTem={props.comTem}
                setDone={setDone}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
