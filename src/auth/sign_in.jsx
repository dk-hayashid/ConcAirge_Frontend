import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



//import '../App.css'

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";
import { awsConfiguration } from '../awsConfiguration';

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

function SignIn(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const changedEmailHaldler = (e) => setEmail(e.target.value)
  const changedPasswordHandler = (e) => setPassword(e.target.value)
  const navigate = useNavigate();

  const signIn = () => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    })
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('result: ' + result)
        const accessToken = result.getAccessToken().getJwtToken()
        console.log('AccessToken: ' + accessToken)
        setEmail('')
        setPassword('')
        console.log("OK, signIn");
        props.setToken(accessToken);
        navigate('/');

      },
      onFailure: (err) => {
        alert('NG, Login please check email, password');
        console.log("NG, signIn:onFailure");
        console.error(err)
        console.log(email)
        console.log(password)
      }
    })
  }

  // デバッグ用
  const checkLogin = () => {
    const cognitoUser = userPool.getCurrentUser()
    if (cognitoUser) {
      console.log('OK, sign in')
    } else {
      console.log('not, signing in')
    }
  }

  const guestLogin = () => {
    props.setToken('guestuser');
    navigate('/');
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 20 }}　style={{ backgroundColor: 'green' }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
      <img src="./images/logo.png" width="50%"></img>
      </Grid>
      <Typography variant='h3' align="center">サインイン</Typography>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
          <Typography variant="h5" align="center">📧</Typography>
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
            onChange={changedEmailHaldler}
            style={{ backgroundColor: 'yellow' }}
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
          <Typography variant="h5" align="center">🔓</Typography>
        </Grid>
        <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}>
          <TextField
            required
            fullWidth
            id="password"
            name="password"
            label="パスワード"
            type="password"
            autoFocus
            onChange={changedPasswordHandler}
            style={{ backgroundColor: 'yellow' }}
          />
        </Grid>
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="contained" size="large" onClick={signIn}>送信</Button>
        </Grid>
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="outlined" size="large" onClick={() => { navigate("/auth/sign_up") }}>サインアップ</Button>
        </Grid>
      </Grid>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="text" size="large" onClick={guestLogin}>ゲストユーザーはこちら</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignIn