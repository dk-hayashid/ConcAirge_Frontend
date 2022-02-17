import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';//並び方決めるやつ
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';//笑顔アイコン
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';//苦しいアイコン
import axios from 'axios';
import { Button } from '@mui/material';

function feedbackbutton (props){
    return(
        <IconButton aria-label="Cold" size='large'>
        <SentimentVeryDissatisfiedIcon fontSize='inherit'/>
        <label>Too cold</label>
      </IconButton>
    );
}


function postfeed(feed) {
    // TODO : backendのURLと合わせる 
    const url = 'http://127.0.0.1:5000/postfeed';
    const data = {
        post_text: feed
    };
    console.log(data);
    axios.post(url, data)
    .then(
        response => {
            console.log(response.data);
        });
}


export default function IconButtons() {
  return (
    
    <Stack direction="row" spacing={3}>
      
      <IconButton aria-label="Cold" size='large' onClick={()=>postfeed("Cold")}>
        <SentimentVeryDissatisfiedIcon fontSize='inherit' htmlColor='blue'/>
        <label>Too cold</label>
      </IconButton>
      


      <IconButton aria-label="Satisfied" size='large' onClick={()=>postfeed("Comfortable")}>
        <SentimentSatisfiedAltIcon fontSize='inherit' htmlColor='green'/>
        <label>Comfortable</label>
      </IconButton>
      

      <IconButton aria-label="Hot" size='large' onClick={()=>postfeed("Hot")}>
        <SentimentVeryDissatisfiedIcon fontSize='inherit' htmlColor='red'/>
        <label>Too hot</label>
      </IconButton>
      
    </Stack>
  );
}