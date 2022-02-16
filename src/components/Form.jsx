import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Form(props) {
    const [user, setUser] = useState({ age: "34", height: "173", weight: "87.4", sex: "male", fashion: "" });
    const history = useNavigate();

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        postForm();
    }

    function postForm() {
        // TODO : backendのURLと合わせる 
        const url = 'http://127.0.0.1:5000/post';
        const data = {
            post_text: user
        };
        console.log(user);
        axios.post(url, data)
            .then(
                response => {
                    console.log(response.data);
                    props.changeComTem(response.data['ComfortTemperature']);
                    props.changeMap(response.data['Map']);
                });
        history('/map');
    }

    return (
        <Container maxWidth="md" style={{ backgroundColor: 'green' }} sx={{ marginTop: 20, }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
                    <Typography variant="h5" margin="normal" sx={{ m: 0 }}>年齢</Typography>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}
                >
                    <TextField
                        required
                        fullWidth
                        id="age"
                        name="age"
                        label="年齢を入力してください。"
                        autoFocus
                        onChange={handleChange}
                        style={{ backgroundColor: 'yellow' }}
                    />
                </Grid>
                <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
                    <Typography variant="h5" margin="normal" sx={{ l: 0 }}>身長</Typography>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}
                >
                    <TextField
                        required
                        fullWidth
                        id="height"
                        label="身長[cm]を入力してください。"
                        name="height"
                        onChange={handleChange}
                        autoFocus
                        style={{ backgroundColor: 'yellow' }}
                    />
                </Grid>
                <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
                    <Typography variant="h5" margin="normal" sx={{ l: 0 }}>体重</Typography>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}
                >
                    <TextField
                        // margin="normal"
                        required
                        fullWidth
                        id="weight"
                        label="体重[kg]を入力してください。"
                        name="weight"
                        onChange={handleChange}
                        autoFocus
                        style={{ backgroundColor: 'yellow' }}
                    />
                </Grid>

                <Grid item xs={12} md={3} style={{ backgroundColor: 'blue' }}>
                    <Typography variant="h5" margin="normal" sx={{ l: 0 }}>性別</Typography>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#e91e63' }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="sex"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="男性" />
                        <FormControlLabel value="female" control={<Radio />} label="女性" />
                    </RadioGroup>
                </Grid>
                <Grid item style={{ backgroundColor: '#e91e63' }}
                ><Button variant="contained" size="large"　onClick={handleSubmit}>送信</Button></Grid>
            </Grid>
        </Container>
    )
}

export default Form;
