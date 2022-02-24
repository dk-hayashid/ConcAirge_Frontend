import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';//並び方決めるやつ
import axios from 'axios';
import Button from '@mui/material/Button';



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


export default function Feedbackbuttons() {
  return (
    
    <Stack spacing={2} direction="row">
      <Button 
        variant="contained" 
        sx={{
          backgroundColor:"#FF7043",
          opacity:1,
            "&:hover":{
              opacity:0.6,
              backgroundColor:"#FF7043"
            },
            "&:active":{
              opacity:0.3,
              backgroundColor:"#FF7043"
            }
        }}
        onClick={() => {postfeed(1)}}
      >Too Hot</Button>
      
      <Button 
        variant="contained" 
        sx={{
            backgroundColor:"#4DB6AC",
            opacity:1,
            "&:hover":{
              opacity:0.6,
              backgroundColor:"#4DB6AC"
            },
            "&:active":{
              opacity:0.3,
              backgroundColor:"#4DB6AC"
            }
        }}
        onClick={() => {postfeed(0)}}
      >Comfortable</Button>
      
      <Button 
        variant="contained" 
        sx={{
            backgroundColor:"#42A5F5",
            opacity:1,
            "&:hover":{
              opacity:0.6,
              backgroundColor:"#42A5F5"
            },
            "&:active":{
              opacity:0.3,
              backgroundColor:"#42A5F5"
            }
        }}
        onClick={() => {postfeed(-1)}}
      >Too Cold</Button>
    </Stack>
  );
}