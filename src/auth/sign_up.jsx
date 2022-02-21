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

//const SignUp: React.FC = () => {
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
    <Container maxWidth="md" sx={{ marginTop: 20 }} style={{ backgroundColor: 'green' }}>
      <Typography variant='h3' align="center">サインアップ</Typography>
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
            onChange={changedEmailHandler}
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
          <Button variant="contained" size="large" onClick={signUp}>送信</Button>
        </Grid>
        <Grid item style={{ backgroundColor: '#e91e63' }}>
          <Button variant="outlined" size="large" onClick={() => { navigate("/") }}>サインイン</Button>
        </Grid>
      </Grid>
    </Container>

    // <div className="remix__page">
    //   <h1 style={{ textAlign: 'left' }}>サインアップ</h1>
    //   <input type="text" placeholder="email" onChange={changedEmailHandler} /><br />
    //   <input type="text" placeholder="password" onChange={changedPasswordHandler} /><br />
    //   <button onClick={signUp}>Submit</button>
    //   <button onClick={()=>{navigate("/")}}>SignIn</button>
    // </div>
  )
}
// export default SignUp

