import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js"
import { awsConfiguration } from '../awsConfiguration'


const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,
})

export default function Signup() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate();

  const changedEmailHandler = (event) => setEmail(event.target.value)
  const changedPasswordHandler = (event) => setPassword(event.target.value)
  const signUp = () => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        console.log(email);
        console.log(password);
        console.error(err);
        console.error(result);
        alert(err);
        return
      }
      setEmail('')
      setPassword('');
      console.log("conmplete, SignUp !!");
      navigate('/auth/verification');
    })
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 10}} style={{ backgroundColor: '#EFEFEF' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant='h3' align="center">メンバー登録</Typography>
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
            id="password"
            name="password"
            label="🔓パスワード"
            type="password"
            onChange={changedPasswordHandler}
          />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item>
          <Button variant="contained"
            sx={{
              backgroundColor: "#54BAB9",
              color: "black",
              "&:hover": {
                opacity: 0.6,
                cursor: "pointer",
                backgroundColor: "#54BAB9"
              },
              "&:active": {
                opacity: 0.3,
                cursor: "pointer",
                backgroundColor: "#54BAB9"
              }
            }}
            size="large" onClick={signUp}>メールアドレス認証</Button>
        </Grid>
        
        <Grid item>
          <Button variant="contained"
            sx={{
              backgroundColor: "#fafafa",
              color: "black",
              "&:hover": {
                opacity: 0.6,
                cursor: "pointer",
                backgroundColor: "#b2dfdb",
              },
              "&:active": {
                opacity: 0.3,
                cursor: "pointer",
                backgroundColor: "#b2dfdb",
              }
            }}
            size="large" onClick={() => { navigate("/") }}>サインインはこちら</Button>
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  )
}



