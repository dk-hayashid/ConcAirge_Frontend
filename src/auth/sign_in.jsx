import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
        props.setUserName(email);
        setEmail('')
        setPassword('')
        console.log("OK, signIn");
        props.setToken(accessToken);
        navigate('/form');
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

  const guestLogin = () => {
    props.setToken('guestuser');
    navigate('/form');
  }

  const mytextboxcolor='F6F6F6';
  const mybackgroundcolor_gray='#EFEFEF';

  return (
    
    <Container maxWidth="md" sx={{ marginTop: 10, backgroundColor: mybackgroundcolor_gray, p:8}}>
      
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
        <Box textAlign={'center'}>
        <img src="./images/logo.png" width="50%"></img>
        </Box>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} >
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="?????????????????????????"
            type="email"
            autoFocus
            onChange={changedEmailHaldler}
            style={{ backgroundColor: mytextboxcolor }}
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
            label="???????????????????"
            type="password"
            onChange={changedPasswordHandler}
            style={{ backgroundColor: mytextboxcolor }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        
        <Grid item>
          <Box textAlign='center'>
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
          size="large" onClick={signIn}>???????????????</Button>
          </Box>
        </Grid>

        <Grid item>
          <Box textAlign='center'>
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
          }} 
              size="large" onClick={() => { navigate("/auth/sign_up") }}>??????????????????</Button>
          </Box>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Button variant="text" sx={{color:"#008B8B"}} size="large" onClick={guestLogin}>?????????????????????????????????</Button>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default SignIn