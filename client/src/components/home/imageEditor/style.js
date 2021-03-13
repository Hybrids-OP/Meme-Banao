import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card:{
        fontFamily:'Montserrat',
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    textf:{
        maxWidth: 567,
        marginTop:theme.spacing(5),
        margin:theme.spacing(2),
    },
    submitButton:{
        marginRight:0,
        marginLeft:0,
    },
    resetButton:{
        marginLeft:0,
        marginRight:0,
    },
    container:{
        marginTop:theme.spacing(3),
        
    },
}))