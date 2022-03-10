import axios from "axios";
import Button from "@mui/material/Button";

export default function FeedbackButton(props) {
    function postfeed(fb) {
      const url = "http://127.0.0.1:5000/postfeed";
      const data = {
        post_text: {
          email: props.userName,
          comtem: props.comTem,
          feedback: fb,
        },
      };
      axios.post(url, data).then((response) => {
        console.log(response.data);
      });
      props.setDone("done");
    }
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: props.color,
          opacity: 1,
          "&:hover": {
            opacity: 0.6,
            backgroundColor: props.color,
          },
          "&:active": {
            opacity: 0.3,
            backgroundColor: props.color,
          },
        }}
        onClick={() => {
          postfeed(props.value);
        }}
      >
        {props.label}
      </Button>
    );
  }
  