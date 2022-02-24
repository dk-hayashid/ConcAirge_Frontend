import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// http://localhost:3000/auth/verification


import {
  CognitoUserPool,
  CognitoUser
} from "amazon-cognito-identity-js"
import { awsConfiguration } from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

function Verification() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('')
  const [verificationCode, setVerificationCode] = React.useState('')
  const changedEmailHandler = (event) => setEmail(event.target.value)
  const changedVerificationCodeHandler = (event) => setVerificationCode(event.target.value)

  const verifyCode = () => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    })
    cognitoUser.confirmRegistration(verificationCode, true, (err) => {
      if (err) {
        console.log(err)
        alert("Error, Verification");
        return
      }
      console.log('verification succeeded')
      setEmail('')
      setVerificationCode('')
      navigate('/')
    })
  }
  return (
    <Container maxWidth="md" sx={{ marginTop: 10,marginBottom: 10,backgroundColor: '#EFEFEF' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant='h3' align="center">認証</Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
         <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="📧メールアドレス"
            type="email"
            autoFocus
            onChange={changedEmailHandler}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TextField
            required
            fullWidth
            id="verification"
            name="verification"
            label="📱認証コード"
            type="text"
            autoFocus
            onChange={changedVerificationCodeHandler}
          />
        </Grid>
        <Grid item xs={1} ></Grid>
        <Grid item>
          <Button variant="contained"           
          sx={{
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
          }} size="large" onClick={verifyCode}>送信</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{
            backgroundColor:"#fafafa",
            color:"black",
            "&:hover":{
                      opacity:0.6,
                      cursor: "pointer",
                      backgroundColor:"#b2dfdb",
                    },
            "&:active":{
                      opacity:0.3,
                      cursor: "pointer",
                      backgroundColor:"#b2dfdb",
                    }
          }}   size="large" onClick={() => { navigate("/auth/sign_up") }}>登録に戻る</Button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  )
}

export default Verification