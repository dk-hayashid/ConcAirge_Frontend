import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Page404(){
    const navigate = useNavigate();
    function clickSignIn(e){
        navigate("/");
    }
    return (
        <div className="Page404">
        <h2>404 Not Found!</h2>
        <h2>ConcAirgeサービスを利用するためにはサインインしてください。</h2>
        {/* <Button variant="outlined" size="large" onClick={() => { navigate("/") }}>サインイン</Button> */}
        <Button variant="contained" sx={{
            backgroundColor:"#54BAB9",
            color:"black",
            "&:hover":{
              opacity:0.6,
              cursor: "pointer",
              backgroundColor:"#54BAB9"
            },
            "&:active":{
              opacity:0.3,
              cursor: "pointer",
              backgroundColor:"#54BAB9"
            }
          }
        }
          size="large" onClick={() => { navigate("/") }}>サインイン</Button>
        </div>
    )

}