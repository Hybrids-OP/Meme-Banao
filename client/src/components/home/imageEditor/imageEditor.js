import React from 'react';
import useStyles from './style';
import {Card, Typography, Button, TextField, Container, Grid} from '@material-ui/core';
import homepageimage from '../../../images/backgroung.jpg'


const ImageEditor = () => {
    const classes = useStyles();
    return(
        <>
        <Card className={classes.card}  >
            <Button variant="contained" color="secondary" fullWidth >
                <Typography>Upload Template</Typography>
            </Button>
            <TextField
                className={classes.textf} 
                name='message'
                variant='outlined'
                label='Add Text at the top of the image'
                fullWidth
                />
        </Card>
        <br/>
        <Container>
            <Grid container className={classes.container} >
                <Grid xs={12} sm={6}>
                    <Button className={classes.submitButton} variant="contained" color="primary"  >
                        <Typography>GO!</Typography>
                    </Button>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Button className={classes.resetButton} variant="contained" color="secondary"  >
                        <Typography>Reset</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </>

    );
}

export default ImageEditor;