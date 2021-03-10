import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import homepageimage from '../../images/backgroung.jpg';
import useStyles from './style'

const Home = () => {
    const classes = useStyles(); 
    return(
        <Card className={classes.card}  >
            <Typography className={classes.title} variant="h6">Surfing and CHILL!</Typography>
            <CardMedia  className={classes.media} image={homepageimage} title="HomePage"></CardMedia>
            {/* <CardContent>
                <Typography variant="body2" component="p">
                    Welcome Welcome!
                </Typography>
            </CardContent> */}
        </Card>
        
    );
}


export default Home;
