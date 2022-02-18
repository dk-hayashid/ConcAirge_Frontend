import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



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
    <Container maxWidth="md" sx={{ marginTop: 20 }}>
      <Typography variant='h3' align="center">認証</Typography>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
          <Typography variant="h5" margin="normal" sx={{ m: 0 }}>📧</Typography>
        </Grid>
        <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="メールアドレス"
            type="email"
            autoFocus
            onChange={changedEmailHandler}
            style={{ backgroundColor: 'yellow' }}
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
          <Typography variant="h5" margin="normal" sx={{ m: 0 }}>📱</Typography>
        </Grid>
        <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}>
          <TextField
            required
            fullWidth
            id="verification"
            name="verification"
            label="認証コード"
            type="text"
            autoFocus
            onChange={changedVerificationCodeHandler}
            style={{ backgroundColor: 'yellow' }}
          />
        </Grid>
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="contained" size="large" onClick={verifyCode}>送信</Button>
        </Grid>
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="outlined" size="large" onClick={() => { navigate("/auth/sign_up") }}>サインアップ</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Verification