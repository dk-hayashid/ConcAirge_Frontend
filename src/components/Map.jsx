import React, { useState } from 'react';
import Feedbackbuttons from './feelfeedback';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Map(props) {
    const Base64 = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} width="100%" />
    console.log(props)
    return (
        <Container maxWidth="md" sx={{ marginTop: 20, backgroundColor:"#FBF8F1" }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Typography variant="h3">快適温度は{props.comTem}℃</Typography>
                </Grid>
                <Grid item >
                    <Base64 data={props.map} />
                </Grid>

                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Typography variant="h3">快適でしたか？</Typography>
                </Grid>

                <Grid item>
                    <Feedbackbuttons userName={props.userName} comTem={props.comTem} />
                </Grid>
            </Grid>
        </Container>
    )
}