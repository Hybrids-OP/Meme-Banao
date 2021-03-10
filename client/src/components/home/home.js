import React from 'react';
import { Grid,Container } from '@material-ui/core';
import homepageimage from '../../images/backgroung.jpg';
import useStyles from './style'
import Header from './header/header'

import ImageHolder from './imageHolder/imageHolder'

const Home = () => {
    const classes = useStyles(); 
    return(
        <>
        <Header />
        <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Grid xs={12} sm={7}>
                    <ImageHolder />
                </Grid>
                <Grid xs={12} sm={4}>
                    
                </Grid>
            </Grid>
        </Container>
        </>
    );
}


export default Home;
