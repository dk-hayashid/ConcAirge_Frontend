import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Home(props) {

    return (
        <Container maxWidth="md" sx={{ marginTop: 20 }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                <Grid item style={{ backgroundColor: '#e91e63' }}>
                    <img src="images/logo.png" style={{ widht: "100%", height: "auto" }} />
                </Grid>

            </Grid>
        </Container>
    )
}