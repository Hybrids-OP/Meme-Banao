import React from 'react';
import {Paper,Grid,Typography, createGenerateClassName} from '@material-ui/core';
import useStyles from './style'

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container maxWidth="sm">
            <Grid item sm={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography component="div" variant="h5"><span style={{color: 'red'}}>Meme</span>Banao</Typography>
                    <Typography className={classes.para} variant="body2">
                    <p>Here You can make Memes<br/>
                    Become A MemeLord!</p>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>    
    );
}


export default Header;