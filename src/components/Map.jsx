import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Map(props) {
    const Base64 = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} width="100px" />
    return (
        <Container maxWidth="md" sx={{ marginTop: 20 }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                <Grid item xs={12} style={{ backgroundColor: '#e91e63' ,textAlign: 'center'}}>
                    <Typography variant="h2">快適温度は{props.comTem}℃</Typography>
                </Grid>
                <Grid item style={{ backgroundColor: '#e91e63' }}>
                    <Base64 data={props.map} />
                </Grid>
            </Grid>
        </Container>
    )
}